import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa';
import SkeletonNewsArticle from '../../components/SkeletonNewsArticle'
import Background from '../../components/Background'
import { useFormatedDate } from '../../hooks/useFormatedDate'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOCKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "blogPost" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug
  })

  if(!items.length) {
      return {
          redirect: {
              destination: '/',
              permanent: false
          }
      }
  }

  return {
    props: { blogPost: items[0] },
    revalidate: 1
  }

}

export default function NewsArticleDetail({ blogPost }) {
    if(!blogPost) return <SkeletonNewsArticle/>

    const {title, date, body, thumbnail} = blogPost.fields
    const formatedDate = useFormatedDate(date)

    return (
        <Background className="pb-4">
            <Link href="/">
              <a className="z-50 fixed top-4 left-4 rounded-full bg-green p-2 text-xl text-white transition ease-in-out duration-300 hover:bg-white hover:text-green">
                  <FaArrowLeft/>
              </a>
            </Link>
            <div className="">
                <div className="max-w-4xl mx-auto bg-gray-50 bg-opacity-90 min-h-screen">
                    <div className="p-8">
                        <div className="h-72 relative">
                            <Image 
                            src={"https:" + thumbnail.fields.file.url}
                            layout="fill"
                            objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="px-8 max-w-4xl mx-auto">
                        <div>
                            <h1 className="text-4xl my-2">{title}</h1>
                        </div>
                        <div className="text-right mb-10">
                            le {formatedDate}
                        </div>
                        <div className="article-content">
                            {documentToReactComponents(body)}
                        </div>
                    </div>
                </div>
            </div>
        </Background>
    )
}
