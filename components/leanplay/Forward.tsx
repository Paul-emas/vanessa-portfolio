import StrokeIcon from '../../public/svgs/stroke.svg'
import BubbleIcon from '../../public/svgs/bubble.svg'
import LightStroke from '../../public/svgs/light-stroke.svg'

import Heading from '../homepage/sections/Heading'

const Forward = () => {
  return (
    <div className="bg-base py-36">
      <div className="container relative mx-auto px-20">
        <StrokeIcon className="mb-9 ml-[450px]" />
        <BubbleIcon className="absolute left-1/2 top-80" />
        <LightStroke className="absolute left-2/3 top-[450px]" />
        <div className="grid grid-cols-2 gap-x-20">
          <div className="max-w-[549px]">
            <Heading title={`Going Forward`} />
            <p className="text-2xl font-bold text-gray">
              <ul className="ml-5 list-disc">
                <li>Takeaways</li>
                <li>Next steps</li>
              </ul>
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Forward
