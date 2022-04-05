import Image from 'next/image'
import Heading from '../homepage/sections/Heading'

const Conclusion = () => {
  return (
    <div className="bg-base py-24">
      <div className="container mx-auto px-20">
        <div className="max-w-[549px]">
          <Heading title={`Conclusions`} />
        </div>
        <div className="mx-auto mt-10">
          <p className="text-lg text-gray">
            After iterating upon the wireframes extensively and I was confident
            in the solution that I was creating, I then proceeded to start the
            design of the high fidelity version of those wireframe. I
            continuously iterate and improve the high fidelity designs based on
            feedbacks.
          </p>
          <div className="mt-6 text-lg text-gray">
            Overall, I'm happy I was able to build a solution that is scalable
            even with the constraints I had. You can check out my resume here
            👇: <br />
            <a
              href="https://www.canva.com/design/DAE1tfG1NY4/MjqG3pvBRk1dQgHilmae-A/view?utm_content=DAE1tfG1NY4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
              className="text-secondary"
            >
              https://www.canva.com/design/DAE1tfG1NY4/MjqG3pvBRk1dQgHilmae-A/view?utm_content=DAE1tfG1NY4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink
            </a>
          </div>
        </div>
        <div className="mt-[162px] flex items-center text-[55px] font-bold text-secondary">
          <span>Thanks for your time ️</span>
          <span className="ml-7">😊</span>
        </div>
      </div>
    </div>
  )
}

export default Conclusion
