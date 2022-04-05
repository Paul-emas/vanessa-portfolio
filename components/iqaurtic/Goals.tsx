import StrokeIcon from '../../public/svgs/stroke.svg'
import BubbleIcon from '../../public/svgs/bubble.svg'
import LightStroke from '../../public/svgs/light-stroke.svg'

import Heading from '../homepage/sections/Heading'

const Goals = () => {
  return (
    <div className="bg-base py-36">
      <div className="container relative mx-auto px-20">
        <StrokeIcon className="mb-9 ml-[450px]" />
        <BubbleIcon className="absolute left-1/2 top-80" />
        <LightStroke className="absolute left-2/3 top-[450px]" />
        <div className="grid grid-cols-2 gap-x-20">
          <div className="max-w-[549px]">
            <Heading title={`Goals`} />
            <p className="text-2xl font-bold text-gray">
              “The goal is to ensure easy code capturing and to transform data
              retrival, as well as provide up-to-date and on-demand patient
              clinical documentation.”
            </p>
            <p className="mt-6 text-lg text-gray">
              iQ SmartCoder improves code capture for RA Coders by providing an
              easy-to-use and interactive user interface. Key features empower
              coders with the information needed to make an informed decision
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Goals
