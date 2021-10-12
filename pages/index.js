import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { createClient } from 'contentful'

export async function getStaticProps() {
  const client = createClient()
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Edia Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}
