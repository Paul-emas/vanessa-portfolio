import Image from 'next/image'
import Heading from '../homepage/sections/Heading'
import BubbleIcon from '../../public/svgs/bubble.svg'

const Mockup01 = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <BubbleIcon className="relative top-56 left-2/3 mb-[68px] scale-150" />
        <Heading title={`Mockups`} />
        <div className="grid grid-cols-2">
          <div className="max-w-[549px]">
            <div className="text-2xl font-bold text-gray">
              “Based on my findings from the usability study, i decided to work
              on some changes to the flow i had initially set up.”
            </div>
            <div className="mt-6 text-lg text-gray">
              I added a mic feature in the search option to help users who have
              difficulty typing to search for a movie using their voices, also,
              from the study, users asked to see the price of the tickets before
              getting them. I added this feature to make the experience of the
              user a pleasant one.
            </div>
          </div>
          <div></div>
        </div>

        <div className="mt-32">
          <div className="flex scale-110 justify-center space-x-5">
            <div className="">
              <Image
                src="/images/frame-13.png"
                width={556}
                height={466.36}
                priority
                className="mobile-mockup"
              />
            </div>
            <div className="flex items-end">
              <Image
                src="/images/frame-14.png"
                width={556}
                height={466.36}
                priority
                className="mobile-mockup-2"
              />
              <BubbleIcon className="ml-11 mb-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mockup01
