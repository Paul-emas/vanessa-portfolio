import Image from 'next/image'
import Heading from '../homepage/sections/Heading'
import BubbleIcon from '../../public/svgs/bubble.svg'

const Hifi = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <BubbleIcon className="relative left-2/3 mb-[68px] scale-150" />
        <Heading title={`Hi-fi Prototype`} />
        <div className="grid grid-cols-2">
          <div className="max-w-[549px]">
            <div className="text-lg text-gray">
              Here is the link to the prototype you can check it out:{' '}
              <a
                href="https://www.figma.com/proto/6FUmuKGYdA6Jhxw67zPyiD?page-id=141%3A1022&nodeid=507%3A5419&scaling=contain&starting-point-node-id=507%3A5419"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary"
              >
                https://www.figma.com/proto/6FUmuKGYdA6Jhxw67zPyiD?page-id=141%3A1022&nodeid=507%3A5419&scaling=contain&starting-point-node-id=507%3A5419
              </a>
            </div>
          </div>
          <div className="-mt-10 flex items-end">
            <Image
              src="/images/frame-15.jpg"
              width={555}
              height={366.36}
              objectFit="cover"
              priority
              className="rounded-md"
            />
            <BubbleIcon className="ml-11 mb-10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hifi
