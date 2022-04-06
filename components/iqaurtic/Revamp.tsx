import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Revamp = () => {
  return (
    <div className="bg-base py-24">
      <div className="container mx-auto px-20">
        <Heading title={`Old Design & Revamp`} />
        <div className="grid grid-cols-2 gap-x-32 2xl:gap-x-0">
          <div className="max-w-[549px]">
            <p className="text-lg text-gray">
              The client had some designs, however, it lacked aesthetics and
              user experience. My goal was improve this as well as solve the
              user problem of the project.
            </p>
          </div>
          <div className="-mt-60 -ml-24  2xl:-ml-32">
            <Image
              src="/images/frame-4.png"
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

export default Revamp
