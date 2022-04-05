import StrokeIcon from '../../public/svgs/stroke.svg'
import BubbleIcon from '../../public/svgs/bubble.svg'
import LightStroke from '../../public/svgs/light-stroke.svg'

import Heading from '../homepage/sections/Heading'

const Takeaways = () => {
  return (
    <div className="bg-base py-36">
      <div className="container relative mx-auto px-20">
        <StrokeIcon className="mb-9 ml-[450px]" />
        <BubbleIcon className="absolute left-1/2 top-80" />
        <LightStroke className="absolute left-2/3 top-[450px]" />
        <div className="grid grid-cols-2 gap-x-20">
          <div className="max-w-[549px]">
            <Heading title={`Takeaways`} />
            <div className="mt-10">
              <div className="flex">
                <div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray font-bold">
                    1
                  </div>
                </div>
                <div className="ml-[17px]">
                  <div className="text-2xl font-bold text-gray">Impact</div>
                  <p className="mt-4 text-lg text-gray">
                    I felt really great to have carried this out, the most
                    important part of this experience were the feedbacks i got
                    during the user testing process.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    One participant wrote: <br />{' '}
                    <span className="italic">
                      “There weren't distracting elements, It was easy to follow
                      along”
                    </span>
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
                  <div className="text-2xl font-bold text-gray">
                    What I learned
                  </div>
                  <p className="mt-4 text-lg text-gray">
                    I loved the entire experience i had when building this
                    product. The most thing i would always remember is to never
                    begin a product without planning out your process, it is the
                    key to a successful product.
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

export default Takeaways
