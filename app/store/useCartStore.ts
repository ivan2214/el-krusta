import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import burguersJSON from '@/app/data/burguers.json'
import { Burguer, BurguerCart } from '../types'
import { toast } from 'react-hot-toast'
import { BurguerContext } from '../context/BurguersContext'
import { useContext } from 'react'

export interface State {
  cart: BurguerCart[]
  totalItems: number
  totalPrice: number
}

interface Actions {
  addToCart: (id: Number) => void
  removeFromCart: (id: Number) => void
  incrementCartItem: (id: Number) => void
  decrementCartItem: (id: Number) => void
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
}

function getBurguerById(id: Number) {
  const burguers = burguersJSON
  const burguer = burguers.find((burguer) => burguer?.id === id)
  return burguer
}

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart: (id: Number) => {
        const cart = get().cart
        const burguerInCart = cart.find((item) => item.id === id)
        const burguer = getBurguerById(id)

        if (burguerInCart && burguer) {
          const updatedCart = cart.map((item) =>
            item.id === burguer.id ? { ...item, quantity: (item.quantity as number) + 1 } : item,
          )
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + burguer.precio,
          }))
        } else if (!burguerInCart && burguer) {
          const updatedCart = [...cart, { ...burguer, quantity: 1 }]

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + burguer.precio,
          }))
        }
        toast.success('añadida!!')
      },
      removeFromCart: (id: Number) => {
        const burguer = getBurguerById(id)
        if (burguer)
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - burguer.precio,
          }))
        toast.success('removida')
      },
      incrementCartItem: (id: Number) => {
        const burguer = getBurguerById(id)

        if (burguer)
          set((state) => {
            const updatedCart = state.cart.map((item) =>
              item.id === burguer.id ? { ...item, quantity: (item.quantity as number) + 1 } : item,
            )
            return {
              cart: updatedCart,
              totalItems: state.totalItems + 1,
              totalPrice: state.totalPrice + burguer.precio,
            }
          })
        toast.success('Cantidad aumentada!')
      },

      decrementCartItem: (id: Number) => {
        const burguer = getBurguerById(id)

        if (burguer)
          set((state) => {
            const updatedCart = state.cart.map((item) =>
              item.id === burguer.id
                ? {
                    ...item,
                    quantity: (item.quantity as number) > 1 ? (item.quantity as number) - 1 : 1,
                  }
                : item,
            )
            return {
              cart: updatedCart,
              totalItems: state.totalItems > 0 ? state.totalItems - 1 : 0,
              totalPrice:
                state.totalPrice > burguer.precio
                  ? state.totalPrice - burguer.precio
                  : state.totalPrice,
            }
          })
        toast.success('Cantidad reducida!')
      },
    }),
    {
      name: 'cart-storage',
    },
  ),
)
