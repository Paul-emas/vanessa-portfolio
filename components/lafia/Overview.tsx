import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Overview = () => {
  return (
    <div className="bg-base pt-36">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2">
          <div className="max-w-[549px]">
            <Heading title={`Overview & Problem`} />
            <p className="text-2xl font-bold text-gray">
              “Many health care organizations in Africa, do not share the same
              health practice, most of their services are not transparent and
              patients are left in the dark until the next time they need care.”
            </p>
            <p className="mt-6 text-lg text-gray">
              Furthermore, with the increase of diseases, people frequently
              visit the hospital and are delayed more than necessary because
              there are people already in line to see a doctor. Also, with the
              rising pace of Covid 19, the idea to establish a telehealth
              platform was approached to help reduce the spread of the deadly
              disease and to ensure health organizations’ connectivity.
            </p>
            <p className="mt-6 text-lg text-gray">
              Lafia.io is a product that aims to solve the operational and
              technological issues facing health care in Africa. We aim to
              transform the healthcare industry in Africa by rethinking and
              redesigning the interactions from the ground up. We want to strip
              out the label and make it more human. I joined the project when it
              was in its baby stage, and so far it is progressing well.
            </p>
          </div>
          <div>
            <Image
              src="/images/overview-bg.png"
              width={699}
              height={902}
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
