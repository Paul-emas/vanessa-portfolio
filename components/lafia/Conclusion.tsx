import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

type ConclusionType = {
  caption: string
  caption2?: string
}

const Conclusion = ({ caption, caption2 }: ConclusionType) => {
  return (
    <div className="bg-base py-24">
      <div className="container mx-auto px-20">
        <div className="max-w-[549px]">
          <Heading title={`Conclusions`} />
        </div>
        <div className="mx-auto mt-10">
          <p className="max-w-5xl text-lg text-gray">{caption}</p>
          <p className="mt-6 max-w-5xl text-lg text-gray">{caption2}</p>
        </div>
        <div className="mt-[62px] flex items-center text-[55px] font-bold text-secondary">
          <span>Thanks for your time ️</span>
          <span className="ml-7">😊</span>
        </div>
      </div>
    </div>
  )
}

export default Conclusion
