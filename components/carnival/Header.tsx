import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Heading from '../homepage/sections/Heading'
import Modal from '../Modal'

const Header = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState('')

  const canivalNames = [
    'Mzaka',
    'MockUp',
    'Meg mobile',
    'Reelix mockup',
    'Foodie app',
    `I'm Open app`,
    'Lafia.io',
    'Meg web',
    'Lafia.io',
    'Reelix web',
    'Edu card',
    'Bidix',
  ]

  return (
    <div className="relative z-10 bg-base pt-[155px] pb-56">
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        imageUrl={selectedImageUrl}
      />
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2 gap-x-56">
          <div>
            <Link href="/">
              <a className="z-10 flex cursor-pointer items-center">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="h-5 w-5 text-gray"
                />
                <span className="ml-10 text-gray">Go to Landing page</span>
              </a>
            </Link>
            <div className="mt-[116px]">
              <Heading title="Design Carnival">
                I am a lover of art and color, so i use my spare time to
                experiment on some cool design stuff 😎. Have fun viewing....
                #Awesome
              </Heading>
            </div>
          </div>
          <div></div>
        </div>
        <div className="mx-auto mt-[159px] grid max-w-6xl grid-cols-3 gap-y-[57px]">
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

export default Header
