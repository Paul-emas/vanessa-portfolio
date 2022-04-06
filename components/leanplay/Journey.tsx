import Image from 'next/image'
import Heading from '../homepage/sections/Heading'
import BubbleIcon from '../../public/svgs/bubble.svg'

const Journey = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <BubbleIcon className="relative left-2/3 mb-[68px] scale-150" />
        <Heading title={`User Journey Map`} />
        <div className="grid grid-cols-2 gap-x-20 2xl:gap-x-0">
          <div className="max-w-[549px]">
            <div className="text-2xl font-bold text-gray">
              “The goal of this journey map is to empathize with Mr Alaba and
              his desire to watch a thrilling and exciting movie”
            </div>
            <div className="mt-6 text-lg text-gray">
              A lot of thought was put into this process, it wasn’t easy but it
              was a lot of fun. It was beneficial because i got to picture
              myself as an old person trying to book a ticket for a movie and
              understaning possible challenges they might face throughout the
              process. I used the tool Google slides to carry this out.
            </div>
          </div>
          <div className="-mt-10 flex items-end">
            <Image
              src="/images/frame-6.jpg"
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

export default Journey
