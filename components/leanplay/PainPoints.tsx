import StrokeIcon from '../../public/svgs/stroke.svg'
import BubbleIcon from '../../public/svgs/bubble.svg'
import LightStroke from '../../public/svgs/light-stroke.svg'

import Heading from '../homepage/sections/Heading'

const PainPoints = () => {
  return (
    <div className="bg-base pb-16">
      <div className="container relative mx-auto px-20">
        <StrokeIcon className="mb-9 ml-[450px]" />
        <BubbleIcon className="absolute left-1/2 top-80" />
        <LightStroke className="absolute left-2/3 top-[450px]" />
        <Heading title={`Understanding the user`} />
        <div className="grid grid-cols-2 gap-x-20 2xl:gap-x-0">
          <div className="max-w-[549px]">
            <p className="text-2xl font-bold text-gray">
              “During research, in order to empathazie with the users, i took my
              time to understand them, and to do so i need to know their
              painpoints.” Here are a few:
            </p>

            <div className="mt-10">
              <div className="flex">
                <div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray font-bold">
                    1
                  </div>
                </div>
                <div className="ml-[17px]">
                  <div className="text-2xl font-bold text-gray">Confusion</div>
                  <p className="mt-4 text-lg text-gray">
                    After getting to the theatre most people are not sure which
                    seat and time works for them.
                  </p>
                </div>
              </div>
              <div className="mt-2 flex">
                <div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray font-bold">
                    2
                  </div>
                </div>
                <div className="ml-[17px]">
                  <div className="text-2xl font-bold text-gray">
                    Time and energy
                  </div>
                  <p className="mt-4 text-lg text-gray">
                    It was also observed the that get tired easily after a long
                    wait in a queue just to get tickets for a movie.
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

export default PainPoints
