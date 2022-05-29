import ArrowRightIcon from '../../../public/svgs/arrowright.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Heading from './Heading'

const CaseStudies = () => {
  const router = useRouter()
  const path = router.asPath

  return (
    <div
      className={`${
        path === '/case-studies' ? 'mb-28 pt-[180px] pb-56' : 'py-20'
      } relative z-10 bg-base`}
    >
      <div className="z-bg"></div>
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2 gap-x-56">
          <div>
            <Heading title="Case Studies">
              I have worked on several designs over the years. Let me interest
              you with some of them.
            </Heading>
          </div>
          <div></div>
        </div>

        <div className="mt-[100px] max-w-3xl">
          <Link href="/case-studies/leanplay">
            <a className="mb-[74px] flex items-center justify-between border-b border-gray pb-8">
              <div>
                <div className="text-2xl font-bold text-gray">LeanPlay</div>
                <div className="mt-4 max-w-[549px] text-lg text-gray">
                  LeanPlay is a seat reservation app that allows users get
                  tickets and reserve seats in advance for a selected movie.
                </div>
              </div>
              <ArrowRightIcon />
            </a>
          </Link>
          <Link href="/case-studies/lafia-io">
            <a className="mb-[74px] flex items-center justify-between border-b border-gray pb-8">
              <div>
                <div className="text-2xl font-bold text-gray">Lafia.io</div>
                <div className="mt-4 max-w-[549px] text-lg text-gray">
                  Lafia.io is a product that aims to solve the operational and
                  technological issues facing health care in Africa.
                </div>
              </div>
              <ArrowRightIcon />
            </a>
          </Link>
          <Link href="/case-studies/iqaurtic-smartcoder">
            <a className="flex items-center justify-between border-b border-gray pb-8">
              <div>
                <div className="text-2xl font-bold text-gray">
                  Iquartic SmartCoder
                </div>
                <div className="mt-4 max-w-[549px] text-lg text-gray">
                  Iquartic aims towards improving healthcare code capture
                  process by having everything a coder needs at the click of a
                  button.
                </div>
              </div>
              <ArrowRightIcon />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
