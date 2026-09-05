import { useContext } from 'react'
import { CartContext } from './CartContextValue'

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('يجب استخدام useCart داخل CartProvider')
  }
  return context
}
