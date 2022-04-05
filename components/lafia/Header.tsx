import Image from 'next/image'
import Link from 'next/link'
import ArrowLeftIcon from '../../public/svgs/arrowleft.svg'
import React from 'react'

type HeaderProps = {
  title: string
  caption: string
  image: string
  info: any
}

type InfoProps = {
  name: string
  text: string
}

const Header: React.FC<HeaderProps> = ({ title, caption, image, info }) => {
  return (
    <div className="relative mt-[91px] h-[849px] bg-base">
      <div className="container mx-auto px-20">
        <div className="relative top-16 max-w-lg">
          <Link href="/case-studies">
            <a className="z-10 flex cursor-pointer items-center">
              <ArrowLeftIcon />
              <span className="ml-10 text-gray">Go back to Case Studies</span>
            </a>
          </Link>
          <div className="mt-[116px]">
            <div className="text-[55px] font-bold text-gray">{title}</div>
            <div className="mt-[29px] text-grayDark">{caption}</div>
          </div>
          <div className="mt-[57px]">
            {info?.map(({ name, text }: { name: string; text: string }) => (
              <p
                key={name}
                className="mb-5 flex items-center text-lg text-gray"
              >
                <div className="w-24">
                  <strong>{name}:</strong>
                </div>
                <span className="max-w-xs pl-8">{text}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/2">
        <div className="relative h-full w-full bg-dark">
          <Image src={image} layout="fill" objectFit="cover" priority />
        </div>
      </div>
    </div>
  )
}

export default Header
