import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/homepage/Header'
import Quirks from '../components/homepage/sections/Quirks'
import Services from '../components/homepage/sections/Services'
import CaseStudies from '../components/homepage/sections/CaseStudies'
import Canival from '../components/homepage/sections/Canival'
import ContactForm from '../components/homepage/sections/ContactForm'
import Footer from '../components/homepage/sections/Footer'

const Home: NextPage = () => {
  return (
    <div className="bg-base">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Quirks />
      <Services />
      <CaseStudies />
      <Canival />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
