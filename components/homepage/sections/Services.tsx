import Image from 'next/image'
import Heading from './Heading'
import Button from '../../Button'

const Services = () => {
  return (
    <div className="bg-base py-56">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2 gap-x-56">
          <div>
            <Heading title="My Services">
              With skills in different fields of design, I am a person to hire
              when it comes to a full fledged project. Whatever your needs are,
              I can pretty much take on any challenge.
            </Heading>
            <div className="mt-16">
              <Button>Learn more</Button>
            </div>
          </div>
          <div>
            <Image src="/images/services-bg.png" width={397.14} height={412} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
