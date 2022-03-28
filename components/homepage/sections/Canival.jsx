import Image from 'next/image'
import Button from '../../Button'
import Heading from './Heading'

const Canival = () => {
  return (
    <div className="bg-base py-56">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2 gap-x-56">
          <div>
            <Heading title="Design Carnival">
              I am a lover of art and color, so i take my spare time to
              expriment on do cool design stuff😎. Have fun viewing.... #Awesome
            </Heading>
          </div>
          <div>
            <div className="flex justify-end">
              <Button>Check it out!</Button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-[159px] grid max-w-6xl grid-cols-3 gap-y-[57px]">
          <div>
            <Image
              src="/images/canival/bg-1.jpg"
              width={296}
              height={222}
              className="rounded-[10px]"
            />
          </div>
          <div>
            <Image
              src="/images/canival/bg-2.jpg"
              width={296}
              height={222}
              className="rounded-[10px]"
            />
          </div>
          <div>
            <Image
              src="/images/canival/bg-3.jpg"
              width={296}
              height={222}
              className="rounded-[10px]"
            />
          </div>
          <div>
            <Image
              src="/images/canival/bg-4.jpg"
              width={296}
              height={222}
              className="rounded-[10px]"
            />
          </div>
          <div>
            <Image
              src="/images/canival/bg-5.jpg"
              width={296}
              height={222}
              className="rounded-[10px]"
            />
          </div>
          <div>
            <Image
              src="/images/canival/bg-6.jpg"
              width={296}
              height={222}
              className="rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Canival
