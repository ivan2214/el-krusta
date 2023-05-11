'use client'
import React, { createContext } from 'react'
import ingredientes from '@/app/data/ingredientes.json'

type IngredientesContextProviderProps = {
  children: React.ReactNode
}

export const IngredientesContext = createContext(ingredientes)

export const IngredientesContextProvider = ({ children }: IngredientesContextProviderProps) => {
  return <IngredientesContext.Provider value={ingredientes}>{children}</IngredientesContext.Provider>
}
