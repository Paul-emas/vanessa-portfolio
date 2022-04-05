import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ContactForm from '../components/homepage/sections/ContactForm'
import Footer from '../components/homepage/sections/Footer'
import Header from '../components/carnival/Header'

const DesignCarnival: NextPage = () => {
  return (
    <div className="bg-base">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default DesignCarnival
