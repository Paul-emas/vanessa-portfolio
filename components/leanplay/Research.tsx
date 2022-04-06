import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Research = () => {
  return (
    <div className="bg-base py-52">
      <div className="container relative mx-auto px-20">
        <Heading title={`User Research Summary`} />
        <div className="grid grid-cols-2">
          <div className="max-w-[549px]">
            <p className="text-2xl font-bold text-gray">
              “For the seat reservation app for a movie theater, I carried out a
              Time on Task research plan.”
            </p>
            <p className="mt-6 text-lg text-gray">
              I decided to carry out a moderated and unmoderated research
              format. It was implemented using Zoom and face to face methods,
              during normal business hours on Nov 28-29(Wireframes) and Dec
              30-31(Hi-fi)
            </p>
          </div>
          <div className="-mt-44">
            <Image
              src="/images/leanplay-research.png"
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

export default Research
