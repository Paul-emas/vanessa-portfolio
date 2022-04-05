import StrokeIcon from '../../public/svgs/stroke.svg'
import BubbleIcon from '../../public/svgs/bubble.svg'
import LightStroke from '../../public/svgs/light-stroke.svg'

import Heading from '../homepage/sections/Heading'

const NextSteps = () => {
  return (
    <div className="bg-base py-36">
      <div className="container relative mx-auto px-20">
        <StrokeIcon className="mb-9 ml-[450px]" />
        <BubbleIcon className="absolute left-1/2 top-80" />
        <LightStroke className="absolute left-2/3 top-[450px]" />
        <div className="grid grid-cols-2 gap-x-20">
          <div className="max-w-[549px]">
            <Heading title={`Next steps`} />
            <div className="mt-10">
              <div className="flex">
                <div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray font-bold">
                    1
                  </div>
                </div>
                <div className="ml-[17px]">
                  <p className="text-lg text-gray">
                    Iterate more on the design and conduct more studies to get
                    insights
                  </p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray font-bold">
                    2
                  </div>
                </div>
                <div className="ml-[17px]">
                  <p className="text-lg text-gray">
                    Review designs with mobile engineers and product managers
                    for feedbacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default NextSteps
