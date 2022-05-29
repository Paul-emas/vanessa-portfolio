import React from 'react'

type ButtonProps = {
  className?: string
  type?: any
  children?: any
}

const Button: React.FC<ButtonProps> = ({ className, type, children }) => {
  return (
    <button
      type={type}
      className={`${className} btn-primary relative h-[75px] w-[233px] rounded-tl-[60px] rounded-br-[60px] text-lg font-bold uppercase text-gray hover:bg-secondary`}
    >
      <div className="btn-border absolute top-0 left-0 h-full w-full rounded-tl-[60px] rounded-br-[60px]"></div>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
}

export default Button
