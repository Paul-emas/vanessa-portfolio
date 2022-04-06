import Image from 'next/image'
import Heading from '../homepage/sections/Heading'
import BubbleIcon from '../../public/svgs/bubble.svg'

const Digital = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <BubbleIcon className="relative top-56 left-2/3 mb-[68px] scale-150" />
        <Heading title={`Digital Wireframes`} />
        <div className="grid grid-cols-2">
          <div className="max-w-[549px]">
            <div className="text-2xl font-bold text-gray">
              “The goal is to enable users select seats with ease, get tickets
              and have a product accessible for all.”
            </div>
            <div className="mt-6 text-lg text-gray">
              With this in mind, i iterated severally on the paper wireframes in
              order to have a product that everyone can use regardless of who my
              target audience was.
            </div>
          </div>
          <div></div>
        </div>

        <div className="mt-32">
          <div className="grid grid-cols-2 gap-x-20 2xl:gap-x-0">
            <div className="">
              <Image
                src="/images/frame-8.jpg"
                width={555}
                height={366.36}
                objectFit="cover"
                priority
                className="rounded-md"
              />
            </div>
            <div className="items-end 2xl:flex">
              <Image
                src="/images/frame-9.jpg"
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
    </div>
  )
}

export default Digital
