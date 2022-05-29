import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter()
  const pathUrl = router.asPath
  const [isScrolling, setIsScrolling] = useState(false)
  const routes = [
    {
      name: 'About me',
      path: '/about',
    },
    {
      name: 'Works',
      path: '/case-studies',
    },
  ]

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }
  }, [isScrolling])

  return (
    <div
      className={`${
        isScrolling ? 'frost h-16 bg-opacity-40' : 'h-[91px] bg-transparent'
      } duration-50 fixed inset-0 z-40 flex w-full items-center`}
    >
      <div
        className={`${
          isScrolling ? 'invisible opacity-0' : 'visible opacity-100'
        } duration-200`}
      >
        <Link href="/">
          <a className="absolute left-0 top-0">
            <Image src="/images/logo-av.png" width={110.91} height={189} />
          </a>
        </Link>
      </div>

      <div className="container mx-auto px-20">
        <div className="flex items-center justify-between">
          <div
            className={`${
              !isScrolling
                ? 'invisible opacity-0'
                : 'visible opacity-100 delay-300'
            } duration-200`}
          >
            <Link href="/">
              <a>
                <Image src="/images/logo.png" width={22} height={45} />
              </a>
            </Link>
          </div>
          <div className="ml-auto">
            {routes.map(({ name, path }) => (
              <Link key={name} href={path}>
                <a
                  className={`${
                    pathUrl.includes(path) && path !== '/'
                      ? 'active-nav relative text-secondary'
                      : 'text-gray'
                  } px-7 text-lg`}
                >
                  {name}
                </a>
              </Link>
            ))}
            <a
              href="mailto:emasv58@gmail.com"
              className="relative px-7 text-lg text-secondary"
            >
              emasv58@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
