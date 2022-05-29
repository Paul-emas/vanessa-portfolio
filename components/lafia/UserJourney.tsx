import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const UserJourney = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <div className="max-w-[549px]">
          <Heading title={`User Journey Map`} />
        </div>
        <div>
          {' '}
          <div className="mx-auto mt-24 flex justify-center">
            <Image
              src="/images/user-journey.jpg"
              width={1141}
              height={753}
              objectFit="cover"
              priority
              className="mx-auto rounded-[10px]"
            />
          </div>
          <div className="mt-12 text-center text-[22px] italic text-gray">
            Image showing journey map
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserJourney
