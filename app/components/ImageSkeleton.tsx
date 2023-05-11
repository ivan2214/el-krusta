'use client'

import React, { useState, useEffect } from 'react'

interface ImageSkeletonProps {
  src: string
  alt: string
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({ src, alt }) => {
  const [cargada, setCargada] = useState(false)

  useEffect(() => {
    const image = new Image() as HTMLImageElement
    image.onload = () => {
      setCargada(true)
    }
    image.src = src
  }, [src])

  return (
    <>
      <img
        className='
          h-full 
          w-full 
          object-cover 
          max-h-52
          mx-auto
          
         
        '
        src={cargada ? src : 'https://via.placeholder.com/10x10?text='}
        alt={alt}
      />
      {!cargada && <div className=' h-full w-full animate-pulse bg-gray-900 opacity-50' />}
    </>
  )
}

export default ImageSkeleton
