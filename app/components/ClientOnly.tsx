'use client'
import React, { useState, useEffect } from 'react'
import Loading from './Loading'

interface ClientOnlyProps {
  children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setHasMounted(true)
    setLoading(false)
  }, [])

  if (!hasMounted || loading) {
    return <Loading />
  }

  return <>{children}</>
}

export default ClientOnly
