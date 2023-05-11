'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import ImageHtml from './ImageHtml'

interface ImageSkeletonProps {
  src: string
  alt: string
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({ src, alt }) => {
  const [cargada, setCargada] = useState(false)

  useEffect(() => {
    const imageHtml = ImageHtml()
    imageHtml.onload = () => {
      setCargada(true)
    }
    imageHtml.src = src
  }, [src])

  return (
    <>
      <Image
        width={1280}
        height={720}
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
