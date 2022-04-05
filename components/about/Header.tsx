import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Header = () => {
  return (
    <div className="bg-base pt-[180px] pb-56">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2">
          <div className="max-w-[549px]">
            <Heading title="My Quirk" />
            <p className="text-lg text-gray">
              Hi there, I’m Vanessa , you can call me Zezi if you like. I put in
              both names because I just love their meaning together, Vanessa
              means ‘Queen of butterflies’ and Zezi means ‘Good head’, and
              together I refer to myself as a “Butterfly with a good head” 😇 😉
            </p>

            <p className="mt-10 text-lg text-gray">
              I am a designer that is passionate about creativity and
              technology, every day I aim to push and surpass the limits of
              creating an engaging and pixel-perfect digital experience and to
              design the experience for the next generation users. I am
              enthusiastic, always eager to contribute to team success through
              hard work, attention to detail, and excellent organizational
              skills. Motivated to learn, grow and excel.
            </p>
          </div>
          <div>
            <Image src="/images/quirk-bg.png" width={530.1} height={643.1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
