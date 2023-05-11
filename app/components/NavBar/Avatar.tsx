'use client'

import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'

import Image from 'next/image'

interface AvatarProps {
  user?: User | any
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className='relative' onClick={() => signOut()}>
      <div
        className='
        relative 
        inline-block 
        rounded-full 
        overflow-hidden
        h-9 
        w-9 
        md:h-11 
        md:w-11
      '
      >
        <Image fill src={user?.image || 'https://via.placeholder.com/35?text='} alt='Avatar' />
      </div>
    </div>
  )
}

export default Avatar
