import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import SkeletonNewsArticle from '../../components/SkeletonNewsArticle'

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

  return {
    props: { blogPost: items[0] },
    revalidate: 1
  }

}

export default function NewsArticleDetail({ blogPost }) {
    if(!blogPost) return <SkeletonNewsArticle/>

    const {title, date, body, thumbnail} = blogPost.fields
    console.log(blogPost)
    return (
        <div>
            {title}
            {date}
            <Image 
            src={"https:" + thumbnail.fields.file.url}
            height={thumbnail.fields.file.details.image.height}
            width={thumbnail.fields.file.details.image.width}/>
            {documentToReactComponents(body)}
        </div>
    )
}
