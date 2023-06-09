import clsx from 'clsx'
import React from 'react'

interface ButtonProps {
  fullWidth?: boolean
  children?: React.ReactNode
  onClick?: () => void
  secondary?: boolean
  disabled?: boolean
}

const ButtonPrimary: React.FC<ButtonProps> = ({
  children,
  fullWidth,
  onClick,
  secondary,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `
    flex 
    justify-center 
    rounded-xl px-5 py-2 border-2 shadow-md hover:bg-orange-400 hover:text-almost-white lg:text-xl lg:py-3 lg:px-8 
    text-sm 
    font-semibold 
    bg-krusta
    capitalize
    text-white
    `,
        disabled && 'opacity-50 cursor-default',
        fullWidth && 'w-full',
      )}
    >
      {children}
    </button>
  )
}

export default ButtonPrimary
