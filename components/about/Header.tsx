import Image from 'next/image'
import Heading from '../homepage/sections/Heading'
import StrokeIcon from '../../public/svgs/stroke.svg'
import LightStroke from '../../public/svgs/light-stroke.svg'
import BubbleIcon from '../../public/svgs/bubble.svg'

const Header = () => {
  return (
    <div className="bg-base pb-36">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2 gap-x-28 2xl:gap-x-20">
          <div className="mx-auto max-w-[549px] pt-64 2xl:pt-72">
            <Heading title="My Quirk" />
            <p className="text-lg text-gray">
              Hi there, I’m Vanessa , you can call me Zezi if you like. Let's
              work together. I design pixel-perfect digital experiences for the
              next generation of global users, and I'm eager to contribute to
              your team's success. I work remotely from Lagos, Nigeria. Africa's
              TechHub of the future 😉
            </p>

            <p className="mt-10 text-lg text-gray">
              I am enthusiastic, always eager to contribute to team success
              through hard work, attention to detail, and excellent
              organizational skills. When i am not busy i watch anime, k-drama,
              and explore new places.
            </p>
          </div>
          <div className="relative pt-40 2xl:pt-44">
            <LightStroke className="absolute top-20 -left-10 rotate-[270deg]" />
            <StrokeIcon className="absolute bottom-0 -left-48" />
            <BubbleIcon className="absolute top-36 right-36 z-20 scale-[2.2]" />
            <Image
              src="/images/about-bg.jpg"
              width={540}
              height={679}
              className="rounded-[20px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
