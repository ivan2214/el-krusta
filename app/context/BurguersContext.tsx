'use client'
import React, { createContext } from 'react'
import burguers from '@/app/data/burguers.json'

type BurguerContextProviderProps = {
  children: React.ReactNode
}

export const BurguerContext = createContext(burguers)

export const BurguerContextProvider = ({ children }: BurguerContextProviderProps) => {
  return <BurguerContext.Provider value={burguers}>{children}</BurguerContext.Provider>
}
