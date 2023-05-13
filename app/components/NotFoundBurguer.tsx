import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-hot-toast'

const NotFoundBurguer = () => {
  const router = useRouter()

  function returnToCart() {
    return new Promise(async (resolve, reject) => {
      try {
        await router.push(`/carta`)
        resolve('Great')
      } catch (error) {
        reject(error)
      }
    })
  }

  function handleReturnToCart() {
    toast.promise(returnToCart(), {
      loading: 'Loading...',
      success: 'Success',
      error: 'Error',
    })
  }

  return (
    <section>
      <h2>Not Found Burguer</h2>
      <button onClick={handleReturnToCart}>Volver a la carta</button>
    </section>
  )
}

export default NotFoundBurguer
