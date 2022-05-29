import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/homepage/sections/Footer'
import Header from '../../components/lafia/Header'
import Slider from '../../components/lafia/Slider'
import Overview from '../../components/leanplay/Overview'
import Goals from '../../components/leanplay/Goals'
import User from '../../components/leanplay/User'
import Research from '../../components/leanplay/Research'
import Wireframe from '../../components/leanplay/Wireframe'
import Conclusion from '../../components/lafia/Conclusion'
import PainPoints from '../../components/leanplay/PainPoints'
import Personas from '../../components/leanplay/Personas'
import Journey from '../../components/leanplay/Journey'
import Starting from '../../components/leanplay/Starting'
import Digital from '../../components/leanplay/Digital'
import Prototype from '../../components/leanplay/Prototype'
import Usability from '../../components/leanplay/Usability'
import Refine from '../../components/leanplay/Refine'
import Mockup01 from '../../components/leanplay/Mockup01'
import Hifi from '../../components/leanplay/Hifi'
import Assessibility from '../../components/leanplay/Assessibility'
import Takeaways from '../../components/leanplay/Takeaways'
import NextSteps from '../../components/leanplay/NextSteps'

const LeanPlay: NextPage = () => {
  const data = {
    title: 'LeanPlay',
    caption:
      'LeanPlay is a seat reservation app that allows users get tickets and reserve seats in advance for a selected movie.',
    image: '/images/leanplay-bg.jpg',
    info: [
      { name: 'Role', text: 'Ux Designer, Ux Researcher' },
      { name: 'Year', text: '2021' },
      { name: 'Duration', text: 'July 2021 to December 2021' },
      { name: 'Scope', text: 'Mobile app' },
      {
        name: 'Tools Used',
        text: 'Figma, Miro, Maze.co, Google Forms, Google Docs, Google Sheets',
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
      <User />
      <Research />
      <PainPoints />
      <Personas />
      <Journey />
      <Starting />
      <Wireframe />
      <Digital />
      <Prototype />
      <Usability />
      <Refine />
      <Mockup01 />
      <Hifi />
      <Assessibility />
      <Takeaways />
      <NextSteps />
      <Conclusion />
      <Footer />
    </div>
  )
}

export default LeanPlay
