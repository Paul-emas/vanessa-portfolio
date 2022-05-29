import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../../Button'
import Modal from '../../Modal'
import Heading from './Heading'

const Canival = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState('')

  const canivalNames = [
    'Mzaka',
    'MockUp',
    'Meg mobile',
    'Reelix mockup',
    'Foodie app',
    `I'm Open app`,
  ]

  return (
    <div className="bg-base py-24">
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        imageUrl={selectedImageUrl}
      />
      <div className="container mx-auto px-20">
        <div className="flex items-center justify-between">
          <div>
            <Heading title="UI Carnival">
              I am a lover of art and color, so i take my spare time to
              expriment on do cool design stuff😎. Have fun viewing.... #Awesome
            </Heading>
          </div>
          <div>
            <Link href="/design-carnival">
              <a>
                <Button>Check it out!</Button>
              </a>
            </Link>
          </div>
        </div>

        <div className="mt-[159px] grid grid-cols-3 gap-y-[57px] md:max-w-6xl 2xl:mx-auto">
          {canivalNames.map((name, i) => (
            <div
              key={name}
              onClick={() => {
                setOpenModal(true)
                setSelectedImageUrl(`/images/canival/bg-${i + 1}.jpg`)
              }}
              className="relative h-[222px] w-[296px] cursor-pointer overflow-hidden rounded-[10px] 2xl:mx-auto"
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
