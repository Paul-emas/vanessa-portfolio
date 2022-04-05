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
        path === '/case-studies' ? 'pt-[180px] pb-56' : 'py-56'
      } relative z-10 bg-base`}
    >
      <div className="z-bg"></div>
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-2 gap-x-56">
          <div>
            <Heading title="Case Studies">
              I have worked on several designs over the years. Let me interest
              you with a few of them.
            </Heading>
          </div>
          <div></div>
        </div>

        <div className="mx-auto mt-[183px] max-w-3xl">
          <Link href="/case-studies/leanplay">
            <a className="mb-[141px] flex items-center justify-between border-b border-gray pb-8">
              <div>
                <div className="text-2xl font-bold text-gray">LeanPlay</div>
                <div className="mt-4 max-w-[549px] text-lg text-gray">
                  LeanPlay is a seat reservation app that enables users get
                  tickets and reserve seats in advance for their selected movie.
                </div>
              </div>
              <ArrowRightIcon />
            </a>
          </Link>
          <Link href="/case-studies/lafia-io">
            <a className="mb-[141px] flex items-center justify-between border-b border-gray pb-8">
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
            <a className="mb-[141px] flex items-center justify-between border-b border-gray pb-8">
              <div>
                <div className="text-2xl font-bold text-gray">
                  Iquartic SmartCoder
                </div>
                <div className="mt-4 max-w-[549px] text-lg text-gray">
                  Lafia.io is a product that aims to solve the operational and
                  technological issues facing health care in Africa.
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
