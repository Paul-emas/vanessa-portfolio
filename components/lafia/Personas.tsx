import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Personas = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <div className="max-w-[549px]">
          <Heading title={`Personas`}>
            “Based on the project goal, digital mobility and internet
            accessibility is a huge part of the proposed solution. I made sure
            that my personas and the people I interviewed had basic internet
            access or had people that can access the internet on their behalf.”
          </Heading>
        </div>
        <div className="mx-auto mt-[176px]">
          <div className="mb-24 flex items-center justify-center">
            <div>
              <Image src="/images/la-1.png" width={255} height={253} />
            </div>
            <div className="ml-8 max-w-[713px] text-lg text-gray">
              Vivian is a 32-year-old bank manager, she has a 4yr old daughter
              and her 60yr old mother, who just moved in with her, both of whom
              constantly need healthcare check-ins.
            </div>
          </div>
          <div className="mb-24 flex items-center justify-center">
            <div>
              <Image src="/images/la-2.png" width={255} height={253} />
            </div>
            <div className="ml-8 max-w-[713px] text-lg text-gray">
              Grace and Uche are turning 70yrs soon. Grace is a cancer survivor
              and Uche is diabetic. They have 4 grandchildren and 2 children
              living abroad. Grace and Uche need to have access to healthcare
              without having to move around too much.
            </div>
          </div>
          <div className="mb-24 flex items-center justify-center">
            <div>
              <Image src="/images/la-3.png" width={255} height={253} />
            </div>
            <div className="ml-8 max-w-[713px] text-lg text-gray">
              Dr. Giwa is a pediatrician and has his own private hospital.
              Before patients can get to their hospital, medical cases sometimes
              can get critical. He wishes there was a faster way he could
              administer care and first aid without being physically present.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personas
