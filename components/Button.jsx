import React from 'react'

const Button = ({ className, type = 'button', children }) => {
  return (
    <button
      type={type}
      className={`${className} btn-primary relative rounded-tl-[60px] rounded-br-[60px] px-24 py-6 font-bold uppercase text-gray hover:bg-secondary`}
    >
      <div className="btn-border absolute top-0 left-0 h-full w-full rounded-tl-[60px] rounded-br-[60px]"></div>
      {children}
    </button>
  )
}

export default Button
