import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

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
