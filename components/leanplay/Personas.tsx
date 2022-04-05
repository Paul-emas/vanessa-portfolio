import Image from 'next/image'
import Heading from '../homepage/sections/Heading'
import BubbleIcon from '../../public/svgs/bubble.svg'

const Personas = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <BubbleIcon className="relative left-2/3 mb-[68px] scale-150" />
        <Heading title={`Personas & Problem Statement`} />
        <div className="grid grid-cols-2">
          <div className="max-w-[549px]">
            <div className="text-2xl font-bold text-gray">
              I had a few personas set up but i am just going to display one.
              Below is the problem statement for this persona:
            </div>
            <div className="mt-6 text-lg text-gray">
              “Alaba is a busy old man who needs a seat reservation app for a
              movie theater because he cannot wait too long in a queue due to
              his old age.”
            </div>
          </div>
          <div className="-mt-10 flex items-end">
            <Image
              src="/images/frame-5.jpg"
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

export default Personas
