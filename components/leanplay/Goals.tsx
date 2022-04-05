import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Goals = () => {
  return (
    <div className="bg-base py-36">
      <div className="container relative mx-auto px-20">
        <div className="grid grid-cols-2">
          <div className="max-w-[549px]">
            <Heading title={`Goals`} />
            <p className="text-2xl font-bold text-gray">
              “The seat reservation app will let users book tickets and reserve
              seats in advance for a movie.”
            </p>
            <p className="mt-6 text-lg text-gray">
              This will affect users young and old, by giving them an
              opportunity to pick preferred seats and avoid long queues.
            </p>
          </div>
          <div className="-mt-24">
            <Image
              src="/images/leanplay-goal.png"
              width={532.82}
              height={643.1}
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goals
