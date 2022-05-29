import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Goals = () => {
  return (
    <div className="bg-base">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2 gap-x-20">
          <div className="max-w-[549px]">
            <Heading title={`Goals`} />
            <p className="text-2xl font-bold text-gray">
              “Due to the fact that there isn’t enough transparency on medical
              services towards patients, we came up with a purpose.”
            </p>
            <p className="mt-6 text-lg text-gray">
              Currently, patients visit hospitals to get care, when they can
              begin their healthcare journey from the palm of their hands using
              their smartphone. Access to Healthcare and Healthcare records in
              Africa is currently problematic. The goal is to create a platform
              where <strong>“everyone”</strong> can get access to doctors from
              the palm of their hands through a smartphone at an affordable
              rate, and also have their health records at their fingertips.
            </p>
          </div>
          <div className="-mt-32"></div>
        </div>
      </div>
    </div>
  )
}

export default Goals
