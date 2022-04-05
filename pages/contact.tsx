import Head from 'next/head'
import { NextPage } from 'next'
import Navbar from '../components/Navbar'
import ContactForm from '../components/homepage/sections/ContactForm'
import Footer from '../components/homepage/sections/Footer'

const Contact: NextPage = () => {
  return (
    <div className="bg-base">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
