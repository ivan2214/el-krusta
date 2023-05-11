'use client'
import React, { createContext } from 'react'
import categories from '@/app/data/categorias.json'

type CategorieContextProviderProps = {
  children: React.ReactNode
}

export const CategorieContext = createContext(categories)

export const CategorieContextProvider = ({ children }: CategorieContextProviderProps) => {
  return <CategorieContext.Provider value={categories}>{children}</CategorieContext.Provider>
}
