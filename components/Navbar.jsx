import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="fixed inset-0 z-50 flex h-[91px] w-full items-center bg-base">
      <div className="container mx-auto px-20">
        <div className="flex h-full items-center justify-between">
          <div className="logo">
            <Image src="/images/logo.png" width={22} height={45} />
          </div>
          <div className="flex">
            <a href="" className="px-7 text-lg text-secondary">
              Home
            </a>
            <a href="" className="px-7 text-lg text-gray ">
              About me
            </a>
            <a href="" className="px-7 text-lg text-gray ">
              Works
            </a>
            <a href="" className="px-7 text-lg text-gray ">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
