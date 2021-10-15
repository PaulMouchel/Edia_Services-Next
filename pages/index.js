import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Content'
import { createClient } from 'contentful'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOCKEN
  })

  const res = await client.getEntries({ content_type:'blogPost'})

  return {
    props: {
      news: res.items.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date))
    },
    revalidate: 1
  }
}

export default function Home({ news }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Edia Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Content news={news}/>
    </div>
  )
}
