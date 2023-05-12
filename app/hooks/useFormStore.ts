'use client'
import { useEffect, useState } from 'react'
import { Burguer } from '../types'

export default function useFromStore<T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  storeCallback: (state: T) => F,
) {
  const stateOfStore = store(storeCallback) as F
  const [state, setState] = useState<F | Burguer[]>(stateOfStore)

  useEffect(() => {
    setState(stateOfStore)
  }, [stateOfStore])

  return state
}
