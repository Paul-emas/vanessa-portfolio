import React from 'react'

import HeadingIcon from '../../../public/svgs/heading-bg.svg'

type HeadingProps = {
  title: string
  children?: any
}
const Heading: React.FC<HeadingProps> = ({ title, children }) => {
  return (
    <>
      <h1 className="text-[55px] font-bold text-gray">{title}</h1>
      <HeadingIcon className="mt-[26px]" />
      <p className="mt-10 max-w-[549px] text-lg text-gray">{children}</p>
    </>
  )
}

export default Heading
