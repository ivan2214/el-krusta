'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import ImageHtml from './ImageHtml'
import { useRouter } from 'next/navigation'

interface ImageSkeletonProps {
  src: string
  alt?: string
  className?: string
  id?: String
  onClick?: boolean
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({ src, alt, className, id, onClick }) => {
  const router = useRouter()
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
        onClick={() => {
          onClick && router.push(`/detail/${id}`)
        }}
        width={1280}
        height={720}
        className={`${
          className
            ? className
            : `h-full cursor-pointer
        w-full 
        object-cover 
        max-h-52
        mx-auto`
        } cursor-pointer`}
        src={cargada ? src : 'https://via.placeholder.com/10x10?text='}
        alt={alt || 'asdasdas'}
      />
      {!cargada && <div className=' h-full w-full animate-pulse bg-gray-900 opacity-50' />}
    </>
  )
}

export default ImageSkeleton
