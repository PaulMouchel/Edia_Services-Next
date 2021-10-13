import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

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
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug
  })

  return {
    props: { blogPost: items[0] }
  }

}

export default function NewsArticleDetail({ blogPost }) {
    return (
        <div>
            
        </div>
    )
}
