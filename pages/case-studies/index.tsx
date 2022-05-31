import { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import CaseStudies from '../../components/homepage/sections/CaseStudies'
import Footer from '../../components/homepage/sections/Footer'

const CaseStudiesPage: NextPage = () => {
  return (
    <div className="bg-base">
      <Navbar />
      <CaseStudies />
      <Footer />
    </div>
  )
}

export default CaseStudiesPage
