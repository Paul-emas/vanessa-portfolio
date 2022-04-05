import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Button from '../Button'

const Header = () => {
  return (
    <div className="relative top-[80px] h-[1073px] w-full bg-base">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2">
          <div className="pt-32 2xl:pt-52">
            <div className="text-2xl text-gray">Hi there👋,</div>
            <div className="mt-4 text-7xl font-bold text-secondary">
              I’m Vanessa.
            </div>
            <div className="mt-[59px] text-lg text-gray">
              When you need to innovate, you need collaboration
            </div>
            <div className="mt-2 text-grayDark">-Marissa Mayer</div>

            <div className="mt-[59px] flex space-x-6">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-6 w-6 text-gray"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-6 w-6 text-gray"
              />
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-gray" />
            </div>
            <div className="mt-[60px]">
              <Button>Hire me</Button>
            </div>
          </div>
          <div className="pt-0 2xl:pt-24">
            <Image src="/images/banner.png" width={586.82} height={671} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
