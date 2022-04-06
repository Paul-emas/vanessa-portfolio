import Image from 'next/image'
import Heading from '../homepage/sections/Heading'
import BubbleIcon from '../../public/svgs/bubble.svg'

const Prototype = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <BubbleIcon className="relative left-2/3 mb-[68px] scale-150" />
        <Heading title={`Lo-fi Prototype`} />
        <div className="grid grid-cols-2 gap-x-20">
          <div className="max-w-[549px]">
            <div className="text-lg text-gray">
              I decided to work the low fidelity prototype to carry out the
              first part of user testing process. I used the platform called{' '}
              <a
                href="https://maze.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                maze.co
              </a>{' '}
              to test it with users
            </div>
          </div>
          <div className="-mt-10 flex items-end">
            <Image
              src="/images/frame-10.jpg"
              width={555}
              height={366.36}
              objectFit="cover"
              priority
              className="rounded-md"
            />
            <BubbleIcon className="ml-11 mb-10 hidden 2xl:block" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prototype
