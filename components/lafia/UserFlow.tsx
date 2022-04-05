import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const UserFlow = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <div className="max-w-[549px]">
          <Heading title={`Userflows`} />
        </div>
        <div className="mx-auto mt-24 flex justify-center">
          <Image
            src="/images/flow-1.jpg"
            width={1141}
            height={753}
            objectFit="cover"
            priority
            className="mx-auto rounded-[10px]"
          />
        </div>
        <div className="mx-auto mt-32 flex justify-center">
          <Image
            src="/images/flow-2.jpg"
            width={1141}
            height={753}
            objectFit="cover"
            priority
            className="mx-auto rounded-[10px]"
          />
        </div>
      </div>
    </div>
  )
}

export default UserFlow
