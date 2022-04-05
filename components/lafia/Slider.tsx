import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Flickity from 'react-flickity-component'
import Figma from '../../public/svgs/figma.svg'
import Miro from '../../public/svgs/miro.svg'
import Maze from '../../public/svgs/maze.svg'
import Forms from '../../public/svgs/forms.svg'
import Docs from '../../public/svgs/docs.svg'
import Sheet from '../../public/svgs/sheet.svg'

const Slider = () => {
  const router = useRouter()
  const [data, setData] = useState([
    { name: 'Figma', Icon: Figma },
    { name: 'Miro', Icon: Miro },
    { name: 'Google forms', Icon: Forms },
    { name: 'Google docs', Icon: Docs },
    { name: 'Google sheet', Icon: Sheet },
  ])

  const flickityOptions = {
    initialIndex: 0,
    autoPlay: 2500,
    pageDots: false,
    prevNextButtons: false,
    contain: true,
    freeScroll: true,
  }

  useEffect(() => {
    if (router.asPath.includes('/leanplay')) {
      setData([
        { name: 'Figma', Icon: Figma },
        { name: 'Miro', Icon: Miro },
        { name: 'Maze', Icon: Maze },
        { name: 'Google forms', Icon: Forms },
        { name: 'Google docs', Icon: Docs },
        { name: 'Google sheet', Icon: Sheet },
      ])
    }
  }, [router.asPath])

  return (
    <div className="bg-base pb-[192px] pt-[53px]">
      <Flickity
        className={
          'carousel-home overflow-x-auto border-t border-b border-line outline-none'
        }
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {data.map(({ name, Icon }, i) => (
          <div
            key={i}
            className="flex h-[140px] w-[340px] items-center justify-center border-r border-line text-lg text-gray last:border-none"
          >
            <div className="text-center">
              <Icon className="mx-auto" />
              <div className="mt-4">{name}</div>
            </div>
          </div>
        ))}
      </Flickity>
    </div>
  )
}

export default Slider
