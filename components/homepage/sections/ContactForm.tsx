import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import isEmail from 'is-email'

import Heading from './Heading'
import Button from '../../Button'

const ContactForm = () => {
  const router = useRouter()
  const path = router.asPath
  const { register, handleSubmit } = useForm()

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
        <Heading title="Just a call away 👍" />
        <div className="mx-auto mt-[152px] max-w-[526px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="name" className="text-gray">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-4 h-[50px] w-full rounded-[10px] border-2 border-transparent bg-dark px-7 text-gray shadow-none outline-none focus:border-secondary"
                {...register('name', { required: true })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-gray">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-4 h-[50px] w-full rounded-[10px] border-2 border-transparent bg-dark px-7 text-gray shadow-none outline-none focus:border-secondary"
                {...register('email', {
                  required: true,
                  validate: (value) =>
                    isEmail(value) || 'Please enter a valid email',
                })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-gray">
                Message
              </label>
              <textarea
                id="message"
                className="mt-4 h-[137] w-full rounded-[10px] border-2 border-transparent bg-dark py-5 px-7 text-gray shadow-none outline-none focus:border-secondary"
                {...register('message', { required: true })}
              ></textarea>
            </div>
            <Button type="submit" className="mt-6 w-full">
              Let’s Go
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
