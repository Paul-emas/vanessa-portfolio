import StrokeIcon from '../../public/svgs/stroke.svg'
import BubbleIcon from '../../public/svgs/bubble.svg'
import LightStroke from '../../public/svgs/light-stroke.svg'

import Heading from '../homepage/sections/Heading'

const Usability = () => {
  return (
    <div className="bg-base py-36">
      <div className="container relative mx-auto px-20">
        <StrokeIcon className="mb-9 ml-[450px]" />
        <BubbleIcon className="absolute left-1/2 top-80" />
        <LightStroke className="absolute left-2/3 top-[450px]" />
        <div className="grid grid-cols-2 gap-x-20">
          <div className="max-w-[549px]">
            <Heading title={`Understanding the user`} />
            <p className="text-2xl font-bold text-gray">
              “After much iteration the wireframes, i decided to carry out a
              userbility study with the platform called{' '}
              <a
                href="https://maze.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
              >
                Maze
              </a>{' '}
              to get feedbacks from users”
            </p>

            <div className="mt-10">
              <div className="flex">
                <div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray font-bold">
                    1
                  </div>
                </div>
                <div className="ml-[17px]">
                  <div className="text-2xl font-bold text-gray">
                    Round 1 findings
                  </div>
                  <ul className="mt-4 ml-4 list-disc text-lg text-gray">
                    <li>
                      After getting to the theatre most people are not sure
                      which seat and what time works for them.
                    </li>
                    <li>
                      Some users wanted a way to see the pricing of tickets
                      before buying
                    </li>
                  </ul>
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
                    Round 2 findings
                  </div>
                  <ul className="mt-4 ml-4 list-disc text-lg text-gray">
                    <li>Users would like to find a cinema they like</li>
                    <li>
                      Users that have difficulty typing want an option to search
                      using their voices
                    </li>
                  </ul>
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

export default Usability
