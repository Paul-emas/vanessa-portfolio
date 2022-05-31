import Image from 'next/image'
import StrokeIcon from '../../public/svgs/stroke.svg'
import Heading from '../homepage/sections/Heading'

const Overview = () => {
  return (
    <div className="bg-base py-36">
      <div className="container relative mx-auto px-20">
        <StrokeIcon className="mb-9 ml-[450px]" />
        <div className="grid grid-cols-2">
          <div className="max-w-[549px]">
            <Heading title={`Overview & Problem`} />
            <p className="text-2xl font-bold text-gray">The Problem:</p>
            <p className="mt-6 text-lg text-gray">
              Many users have had various experiences, mostly bad, in getting
              seats for a movie, it’s either the queue is too long for tickets
              or you get to seat in an unfavorable place. I and the team decided
              to know more about these pain points and how our app can solve the
              problem.
            </p>
            <p className="mt-6 text-2xl font-bold text-gray">
              My reponsibilities:
            </p>
            <p className="mt-6 text-lg text-gray">
              In order to sucessfully get a product that can help improve the
              lives of users, i had experimented with different scopes of
              skills, of which includes; User research, Hi-fi and Lo-fi
              Wireframing, Hi-fi and Lo-fi Prototyping, Ui Design.
            </p>
          </div>
          <div>
            <Image
              src="/images/leanplay-ov.png"
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

export default Overview
