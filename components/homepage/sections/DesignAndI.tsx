import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { validate } from 'email-validator'

import Heading from './Heading'
import Button from '../../Button'

const DesignAndI = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const path = router.asPath

  async function onSubmit(formData: any) {
    console.log(formData)
  }

  return (
    <div
      className={`${
        path === '/contact' ? 'pt-[180px] pb-36' : 'pb-36'
      } bg-base`}
    >
      <div className="container mx-auto px-20">
        <div>
          <Heading title="Design & I" />
          <p className="mt-10 text-lg text-gray">
            I have always been a lover of art, colors and technology, then i
            thought to myself, “Hey! how can you combine all these together?”
            That’s when i discovered Product design, it involves interacting
            with users that have no knowledge of how they interact with things
            around them and how those things affect their reality, and putting
            all these complexities together to build something that elevates
            peoples experiences positively.
          </p>
        </div>
        <div className="mt-[100px]">
          <Heading title="My Design & Users" />
          <p className="mt-10 text-lg text-gray">
            I believe good UX design is all about putting the user first. Any
            aspect of a website, app or software that doesn’t consider the
            user’s needs is ultimately doomed to fail. A huge part of the my UX
            design process is getting to know what my target audience’s goals
            and challenges are.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DesignAndI
