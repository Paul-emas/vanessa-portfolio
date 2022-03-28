import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Heading from './Heading'

const CaseStudies = () => {
  return (
    <div className="relative z-10 bg-base py-56">
      <div className="z-bg"></div>
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2 gap-x-56">
          <div>
            <Heading title="Case Studies">
              I have worked on several designs over the years. Let me interest
              you with a few of them.
            </Heading>
          </div>
          <div></div>
        </div>

        <div className="mx-auto mt-[183px] max-w-3xl">
          <div className="mb-[141px] flex items-center justify-between border border-b-gray pb-8">
            <div>
              <div className="text-2xl font-bold text-gray">LeanPlay</div>
              <div className="mt-4 max-w-[549px] text-lg text-gray">
                LeanPlay is a seat reservation app that enables users get
                tickets and reserve seats in advance for their selected movie.
              </div>
            </div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-6 w-6 text-gray"
            />
          </div>
          <div className="mb-[141px] flex items-center justify-between border border-b-gray pb-8">
            <div>
              <div className="text-2xl font-bold text-gray">Lafia.io</div>
              <div className="mt-4 max-w-[549px] text-lg text-gray">
                Lafia.io is a product that aims to solve the operational and
                technological issues facing health care in Africa.
              </div>
            </div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-6 w-6 text-gray"
            />
          </div>
          <div className="mb-[141px] flex items-center justify-between border border-b-gray pb-8">
            <div>
              <div className="text-2xl font-bold text-gray">
                Iquartic SmartCoder
              </div>
              <div className="mt-4 max-w-[549px] text-lg text-gray">
                Lafia.io is a product that aims to solve the operational and
                technological issues facing health care in Africa.
              </div>
            </div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-6 w-6 text-gray"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
