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
        <div>
            <Image 
            src={"https:" + thumbnail.fields.file.url}
            height={thumbnail.fields.file.details.image.height}
            width={thumbnail.fields.file.details.image.width}/>
            <div className="py-6 max-w-4xl mx-auto">
                <div>
                    <h1 className="text-4xl">{title}</h1>
                </div>
                <div>
                    {formatedDate}
                </div>

                <div>
                    <ul className="list-disc">
                        <li style={{display:'list-item'}}>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                    </ul>
                </div>
                <div className="article-content">
                    {documentToReactComponents(body)}
                </div>
            </div>
        </div>
    )
}
