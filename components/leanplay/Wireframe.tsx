import Image from 'next/image'
import Heading from '../homepage/sections/Heading'
import BubbleIcon from '../../public/svgs/bubble.svg'

const Wireframe = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <BubbleIcon className="relative left-2/3 mb-[68px] scale-150" />
        <Heading title={`Paper Wireframes`} />
        <div className="grid grid-cols-2">
          <div className="max-w-[549px]">
            <div className="text-2xl font-bold text-gray">
              “After taking my time to emphatize, I decided to focus on
              implementing an easy process to reserve seats.”
            </div>
            <div className="mt-6 text-lg text-gray">
              During iteration i came up with multiple screens that would
              reflect accessibility and without any bias. I finally had one that
              stood out and made plans to start building the digital wireframes
            </div>
          </div>
          <div className="-mt-10 flex items-end">
            <Image
              src="/images/frame-7.jpg"
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

export default Wireframe
