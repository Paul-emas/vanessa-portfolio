import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-dark py-10">
      <div className="container mx-auto px-20">
        <div className="text-center">
          <Image src="/images/logo.png" width={44} height={91} />
          <div className="mt-[35px] flex justify-center space-x-6">
            <Link href="/">
              <a className="text-gray">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray">About</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray">Works</a>
            </Link>
          </div>
          <div className="mt-[70px] flex justify-center space-x-6">
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-gray" />
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-gray" />
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-gray" />
          </div>
          <div className="mt-[70px] text-grayDark">
            Copyright 2021 • Emas Vanessa
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
