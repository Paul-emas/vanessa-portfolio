import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Revamp = () => {
  return (
    <div className="bg-base py-24">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2">
          <div className="max-w-[549px]">
            <Heading title={`Old Design & Revamp`}>
              The client had some designs, however, it lacked aesthetics and
              user experience. My goal was improve this as well as solve the
              user problem of the project.
            </Heading>
          </div>
          <div className="-mt-16 -ml-32">
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
