import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import SkeletonNewsArticle from '../../components/SkeletonNewsArticle'
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
        <div className="bg-bg bg-cover min-h-screen">
            <div className="bg-opacity-70 bg-blue min-h-screen">
                <div className="py-10">
                    <div className="max-w-6xl mx-auto bg-gray-50 bg-opacity-90">
                        <div className="p-8">
                            <div className="h-72 relative">
                                <Image 
                                src={"https:" + thumbnail.fields.file.url}
                                layout="fill"
                                objectFit="cover"
                                />
                            </div>
                        </div>
                        <div className="py-6 max-w-3xl mx-auto">
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
            </div>
        </div>
    )
}
