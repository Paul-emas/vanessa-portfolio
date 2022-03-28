import Image from 'next/image'
import Heading from './Heading'
import Button from '../../Button'

const Quicks = () => {
  return (
    <div className="bg-base py-56">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2">
          <div>
            <Heading title="My Quirks">
              I am designer that is passionate about creativity and technology,
              every day I aim to push and surpass the limits of creating an
              engaging and pixel-perfect digital experience and to design the
              experience for the next generation users.
            </Heading>
            <div className="mt-16">
              <Button>Learn more</Button>
            </div>
          </div>
          <div>
            <Image src="/images/quirk-bg.png" width={530.1} height={643.1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quicks
