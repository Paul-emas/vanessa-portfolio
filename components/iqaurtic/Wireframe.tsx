import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Wireframe = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2 gap-x-32 2xl:gap-x-0">
          <div className="max-w-[549px]">
            <Heading title={`Wireframes`} />
            <p className="text-2xl font-bold text-gray">
              “I was continuously iterating and improving the high fidelity
              designs based on feedbacks.”
            </p>
            <p className="mt-6 text-lg text-gray">
              After iterating upon the wireframes extensively with the team, I
              was confident in the solution that I was creating, I then
              proceeded to start the designing the high fidelity version of
              those wireframe.
            </p>
          </div>
          <div className="-mt-16 -ml-24 2xl:-ml-32">
            <Image
              src="/images/frame-3.png"
              width={699}
              height={902}
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wireframe
