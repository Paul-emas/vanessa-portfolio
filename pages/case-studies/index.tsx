import { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import CaseStudies from '../../components/homepage/sections/CaseStudies'
import ContactForm from '../../components/homepage/sections/ContactForm'
import Footer from '../../components/homepage/sections/Footer'

const CaseStudiesPage: NextPage = () => {
  return (
    <div className="bg-base">
      <Navbar />
      <CaseStudies />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default CaseStudiesPage