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
      name: 'Home',
      path: '/',
    },
    {
      name: 'About me',
      path: '/about',
    },
    {
      name: 'Works',
      path: '/case-studies',
    },
    {
      name: 'Contact me',
      path: '/contact',
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
      } fixed inset-0 z-50 flex w-full items-center duration-200`}
    >
      <div className="container mx-auto px-20">
        <div className="flex h-full items-center justify-between">
          <div className="logo">
            <Link href="/">
              <a>
                <Image src="/images/logo.png" width={22} height={45} />
              </a>
            </Link>
          </div>
          <div className="flex">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
