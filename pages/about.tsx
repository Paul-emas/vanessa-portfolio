import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ContactForm from '../components/homepage/sections/ContactForm'
import Footer from '../components/homepage/sections/Footer'
import Header from '../components/about/Header'
import Testimonials from '../components/about/Testimonials'

const AboutPage: NextPage = () => {
  return (
    <div className="bg-base">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default AboutPage
