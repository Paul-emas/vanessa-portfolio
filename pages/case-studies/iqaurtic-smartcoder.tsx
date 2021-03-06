import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/homepage/sections/Footer'
import Header from '../../components/lafia/Header'
import Slider from '../../components/lafia/Slider'
import Overview from '../../components/iqaurtic/Overview'
import Goals from '../../components/iqaurtic/Goals'
import Revamp from '../../components/iqaurtic/Revamp'
import Wireframe from '../../components/iqaurtic/Wireframe'
import Conclusion from '../../components/lafia/Conclusion'

const IqaurticSmartCoder: NextPage = () => {
  const data = {
    title: 'Iqaurtic SmartCoder',
    caption:
      'Iquartic aims towards simplyfying the work doctors have to go through in documenting medical records.',
    image: '/images/iqaurtic-bg.jpg',
    info: [
      { name: 'Role', text: 'Ux Designer' },
      { name: 'Year', text: '2021' },
      { name: 'Duration', text: 'Ongoing' },
      { name: 'Scope', text: 'Website, Wellness' },
      {
        name: 'Tools Used',
        text: 'Figma',
      },
    ],
  }

  return (
    <div className="bg-base">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header {...data} />
      <Overview />
      <Goals />
      <Wireframe />
      <Revamp />
      <Conclusion caption="After iterating upon the wireframes extensively and I was confident in the solution that I was creating. Continuously iterating and improving the high fidelity designs based on feedbacks is essential, i am happy to be part of this diverse and compassionate team that keeps bringing deep experience in technology to lead the healthcare revolution." />
      <Footer />
    </div>
  )
}
export default IqaurticSmartCoder
