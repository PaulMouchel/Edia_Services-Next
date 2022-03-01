import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Content'
import { createClient } from 'contentful'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOCKEN
  })

  const blogPosts = await client.getEntries({ content_type:'blogPost'})
  const partners = await client.getEntries({ content_type:'partner'})

  return {
    props: {
      news: blogPosts.items.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date)),
      partners
    },
    revalidate: 1
  }
}

export default function Home({ news, partners }) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Edia Services</title>
        <meta name="description" content="Edia Service met à votre services ses compétences en automatismes industriels. Fort de nombreuses années d'expériences dans des dommaines aussi variés que l'automobile ou l'industie agro-alimentaire, Edia Service saura répondre à votre besoin. De nombreux clients nous font déjà confiance en Bretagne mais aussi dans toute la France et même au delà pour la réalisation et l'optimisation de leurs lignes de production automatisées." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Content news={news} partners={partners}/>
    </div>
  )
}
