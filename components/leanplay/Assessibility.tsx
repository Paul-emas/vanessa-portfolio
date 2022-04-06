import Heading from '../homepage/sections/Heading'
import Image from 'next/image'

const Assessibility = () => {
  return (
    <div className="bg-base py-36">
      <div className="container relative mx-auto px-20">
        <Heading title={`Assessibility Considerstions`} />
        <div className="grid grid-cols-2 gap-x-20">
          <div className="max-w-[549px]">
            <p className="text-2xl font-bold text-gray">
              “For the purpose of equity, here are a few assessibility
              considerations i had in mind. ”
            </p>
            <div className="mt-10">
              <div className="flex">
                <div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray font-bold">
                    1
                  </div>
                </div>
                <div className="ml-[17px]">
                  <div className="text-lg text-gray">
                    I added an option for users to switch between dark and light
                    mode based on which view works best for the user.{' '}
                  </div>
                </div>
              </div>
              <div className="mt-2 flex">
                <div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray font-bold">
                    2
                  </div>
                </div>
                <div className="ml-[17px]">
                  <div className="text-lg text-gray">
                    There is also an option for users who have difficulty using
                    their hands to type, to use the mic option to easily search
                    for a preferred movie.
                  </div>
                </div>
              </div>
              <div className="mt-2 flex">
                <div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray font-bold">
                    3
                  </div>
                </div>
                <div className="ml-[17px]">
                  <div className="text-lg text-gray">
                    I also decided to make my buttons large and easily located.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-16">
            <Image
              src="/images/leanplay-dog.png"
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

export default Assessibility
