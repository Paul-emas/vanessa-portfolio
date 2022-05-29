import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar'
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
      <Footer />
    </div>
  )
}

export default DesignCarnival
