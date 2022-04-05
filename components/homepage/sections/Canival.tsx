import Image from 'next/image'
import Link from 'next/link'
import Button from '../../Button'
import Heading from './Heading'

const Canival = () => {
  const canivalNames = [
    'Mzaka',
    'MockUp',
    'Meg mobile',
    'Reelix mockup',
    'Foodie app',
    `I'm Open app`,
  ]

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
              <Link href="/design-carnival">
                <a>
                  <Button>Check it out!</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-[159px] grid max-w-6xl grid-cols-3 gap-y-[57px]">
          {canivalNames.map((name, i) => (
            <div
              key={name}
              className="relative h-[222px] w-[296px] overflow-hidden rounded-[10px]"
            >
              <div className="absolute z-10 flex h-full w-full scale-150 items-center justify-center bg-overlay opacity-0 duration-200 hover:scale-100 hover:opacity-100">
                <span className="text-2xl font-bold text-gray">{name}</span>
              </div>
              <Image
                src={`/images/canival/bg-${i + 1}.jpg`}
                width={296}
                height={222}
                objectFit="cover"
                className="rounded-[10px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Canival
