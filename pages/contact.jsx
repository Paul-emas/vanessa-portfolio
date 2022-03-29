import Head from 'next/head'
import Navbar from '../components/Navbar'
import ContactForm from '../components/homepage/sections/ContactForm'
import Footer from '../components/homepage/sections/Footer'

const Contact = () => {
  return (
    <div className="">
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
