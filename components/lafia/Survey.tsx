import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Survey = () => {
  return (
    <div className="bg-base py-8">
      <div className="container mx-auto px-20">
        <div className="max-w-[549px]">
          <Heading title={`Survey`}>
            A survey was sent out to major stakeholders, customer-facing
            employees, and users to find out their pain points about the
            platform. The goal was to consolidate the feedbacks and rank these
            pain points to provide an actionable list of prioritized design
            solutions.
          </Heading>
        </div>
        <div>
          <div className="mx-auto mt-24 flex justify-center">
            <Image
              src="/images/survey-bg.jpg"
              width={1141}
              height={753}
              objectFit="cover"
              priority
              className="mx-auto rounded-[10px]"
            />
          </div>
          <div className="mt-12 text-center text-[22px] italic text-gray">
            Image showing survey questions
          </div>
        </div>
      </div>
    </div>
  )
}

export default Survey
