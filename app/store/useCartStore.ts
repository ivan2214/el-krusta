import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { Burguer } from '../types'
import { toast } from 'react-hot-toast'

interface State {
  cart: Burguer[]
  totalItems: number
  totalPrice: number
}

interface Actions {
  addToCart: (Item: Burguer) => void
  removeFromCart: (Item: Burguer) => void
  incrementCartItem: (Item: Burguer) => void
  decrementCartItem: (Item: Burguer) => void
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
}

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart: (burguer: Burguer) => {
        const cart = get().cart
        const cartItem = cart.find((item) => item.id === burguer.id)

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === burguer.id ? { ...item, quantity: (item.quantity as number) + 1 } : item,
          )
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + burguer.precio,
          }))
        } else {
          const updatedCart = [...cart, { ...burguer, quantity: 1 }]

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + burguer.precio,
          }))
        }
        toast.success('añadida!!')
      },
      removeFromCart: (burguer: Burguer) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== burguer.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - burguer.precio,
        }))
        toast.success('removida')
      },
      incrementCartItem: (burguer: Burguer) => {
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

      decrementCartItem: (burguer: Burguer) => {
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