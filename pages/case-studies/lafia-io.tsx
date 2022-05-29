import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/homepage/sections/Footer'
import Header from '../../components/lafia/Header'
import Slider from '../../components/lafia/Slider'
import Overview from '../../components/lafia/Overview'
import Goals from '../../components/lafia/Goals'
import Personas from '../../components/lafia/Personas'
import Survey from '../../components/lafia/Survey'
import UserJourney from '../../components/lafia/UserJourney'
import UserFlow from '../../components/lafia/UserFlow'
import Wireframe from '../../components/lafia/Wireframe'
import Conclusion from '../../components/lafia/Conclusion'

const LafiaIo: NextPage = () => {
  const data = {
    title: 'Lafia.io',
    caption:
      'Lafia.io is a product that aims to solve the operational and technological issues facing health care in Africa.',
    image: '/images/lafio.jpg',
    info: [
      { name: 'Role', text: 'Ux Designer' },
      { name: 'Year', text: '2021' },
      { name: 'Duration', text: 'Ongoing' },
      { name: 'Scope', text: 'Mobile app, Telehealth' },
      {
        name: 'Tools Used',
        text: 'Figma, Miro, Google Forms, Google Docs, Google Sheets',
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
      <Personas />
      <Survey />
      <UserJourney />
      <Conclusion />
      <Footer />
    </div>
  )
}

export default LafiaIo
