import QuoteIcon from '../../public/svgs/quotes.svg'

import Heading from '../homepage/sections/Heading'

const Testimonials = () => {
  return (
    <div className="bg-base py-36">
      <div className="container mx-auto px-20">
        <Heading title="What they say 🤓" />
        <div className="mx-auto mt-[111px] max-w-5xl">
          <div className="flex items-center gap-x-8">
            <div>
              <div className="h-[301px] w-[350px] rounded-lg bg-blue p-8">
                <div className="flex">
                  <div>
                    <QuoteIcon />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg text-base">
                      Vanessa Emas is a proactive, result-oriented, responsible,
                      and technically sound employee and she is always ready to
                      put all her energy and time to get the job done.
                    </p>
                    <div className="mt-6 text-base font-bold">
                      Shedrack Ajaegbu
                    </div>
                    <p className="text-lg text-base">
                      Senior Software Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 h-[274px] w-[350px] rounded-lg bg-blue p-8">
                <div className="flex">
                  <div>
                    <QuoteIcon />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg text-base">
                      She has a growth mindset and is willing to take up new
                      design challenges. She also accepts feedback and makes
                      adjustments when necessary
                    </p>
                    <div className="mt-6 text-base font-bold">
                      Olubunmi Jegede
                    </div>
                    <p className="text-lg text-base">Project manger</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="h-[382px] w-[413px] rounded-lg bg-blue p-8">
                <div className="flex">
                  <div>
                    <QuoteIcon />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg text-base">
                      Vanessa is a finicky individual, a fast learner with very
                      good eyes for the right user experience designs. Her
                      understanding of user exploration and research (which is
                      the foundation for the best form of interactive design)
                      makes her design work one of the best sought after. She is
                      self driven and has continuous desire for growth.
                    </p>
                    <div className="mt-6 text-base font-bold">
                      Emmanuel Aleo
                    </div>
                    <p className="text-lg text-base">Head of Operations</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 h-[409px] w-[415px] rounded-lg bg-blue p-8">
                <div className="flex">
                  <div>
                    <QuoteIcon />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg text-base">
                      Her willingness and ability to dig deep to understand user
                      problems and propose solutions is top-notch. Her
                      collaborative efforts on projects also makes it easy to
                      work with her.
                    </p>
                    <div className="mt-6 text-lg text-base">
                      She is also an avid learner who is always willing to learn
                      and understand new processes if needed to take a project
                      to the finish line.
                    </div>
                    <div className="mt-6 text-base font-bold">
                      Marvel Faseun
                    </div>
                    <p className="text-lg text-base">Senior Product Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
