import Image from 'next/image'
import ArrowIcon from '../../public/svgs/arrow.svg'
import BlobIcon1 from '../../public/svgs/blob1.svg'
import BlobIcon2 from '../../public/svgs/blob2.svg'
import LightStroke from '../../public/svgs/light-stroke.svg'
import SigIcon from '../../public/svgs/sig.svg'
import MedalIcon from '../../public/svgs/medal.svg'
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className="relative top-[80px] h-[900px] w-full bg-base">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2">
          <div className="pt-44 2xl:pt-52">
            <div className="text-2xl text-gray">Hi there 👋,</div>
            <div className="my-4 text-7xl font-bold text-secondary">
              I’m Vanessa.
            </div>
            <p className="text-[30px] text-gray">PRODUCT DESIGNER</p>
            <div className="my-4 max-w-[388px] text-lg text-gray">
              Working towards reaching greater heights with Product design, 3D
              designs, and AR/VR/XR skills.
            </div>

            <div className="mt-[59px] flex space-x-4">
              <a
                href="https://www.linkedin.com/in/vanessa-emas-99a7811b5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-6 w-6 text-gray"
                />
              </a>
              <a
                href="https://twitter.com/Zezi133?t=YaN7VV9LVn1HFjoFGZOhwQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-gray" />
            </div>

            <div className="mt-[108px] flex">
              <div className="relative">
                <ArrowIcon className="absolute left-[5px] top-1" />
                <div className="h-5 w-5 rounded-full border border-gray"></div>
              </div>
              <div className="ml-[22px] text-lg text-gray">Scroll down</div>
            </div>
          </div>
          <div className="relative right-10 pt-36 2xl:right-0 2xl:pt-48">
            <SigIcon className="absolute right-0 2xl:right-20" />
            <LightStroke className="absolute top-0 -left-12 -rotate-90" />
            <div className="absolute left-0 top-20 h-[22.3px] w-[22.3px] rounded-full border-2 border-secondary opacity-70"></div>
            <div className="absolute left-24 top-16 h-[22.3px] w-[22.3px] rounded-full border-2 border-secondary opacity-70 2xl:top-24"></div>
            <div className="absolute right-10 top-10 h-[22.3px] w-[22.3px] rounded-full border-2 border-secondary opacity-70 2xl:right-56"></div>
            <div className="absolute -left-32 bottom-44 h-[22.3px] w-[22.3px] rounded-full border-2 border-secondary opacity-70 2xl:right-56"></div>
            <LightStroke className="absolute bottom-0  right-0 2xl:right-20" />
            <div className="absolute bottom-0 left-10 z-40 flex h-[88px] w-[216px] items-center rounded-[20px] bg-gray px-3.5">
              <div className="flex items-center">
                <div>
                  <MedalIcon />
                </div>
                <div className="ml-3.5">
                  <div className="text-lg font-bold">UI/UX</div>
                  <p className="mt-0.5 text-xs">
                    Problem solving skills at your service
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <BlobIcon1 className="" />
              <div className="absolute inset-0 left-10">
                <div className="absolute left-10 -top-10 z-30 h-[581px] w-[415.85px] overflow-hidden rounded-b-full ">
                  <div className="relative -top-7">
                    <Image
                      src="/images/profile.png"
                      width="415.85px"
                      height="639.69px"
                      objectFit="cover"
                      alt="Vanessa banner image"
                    />
                  </div>
                </div>
                <BlobIcon2 className="absolute -left-16 top-4 rotate-[-183.44deg]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
