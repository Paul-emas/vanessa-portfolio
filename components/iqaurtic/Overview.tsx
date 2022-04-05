import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Overview = () => {
  return (
    <div className="bg-base pt-36 pb-44">
      <div className="relative bg-base py-24">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-2">
            <div className="max-w-[549px]">
              <Heading title={`Overview & Problem`} />
              <p className="text-2xl font-bold text-gray">
                “The project needed better interaction and authenticity, in
                order to improve the end-user’s experience.”
              </p>
              <p className="mt-6 text-lg text-gray">
                iQ SmartCoder is a computer-assisted coding solution that
                improves the code capture process by having everything a coder
                needs at the click of a button.
              </p>
              <p className="mt-6 text-lg text-gray">
                The purpose for this project was to revamp the previous UI. The
                client have been supporting the UI design with past work
                experience as a Business System Analyst for a similar product,
                they were heavily involved in the design, but without any formal
                education on product design. They intend to have a smooth,
                consistent, and intuitive product that will wow their users. My
                role here was to was to improve the interface and experiment
                with different scopes of skills, including User research, Hi-fi
                and Lo-fi Wireframing, Hi-fi and Lo-fi Prototyping.
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="absolute top-16 left-0 h-full w-full outline-white">
          <div className="grid h-full grid-cols-2">
            <div></div>
            <div className="relative">
              <Image
                src="/images/iq-pc-bg.png"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
