export const useCart = () => {
  const cart = useState<any[]>('cart', () => [])
  const addToCart = (product: any) => {
    const existingProduct = cart.value.find((item) => item.id === product.id)
    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (productId: string) => {
    cart.value = cart.value.filter((item) => item.id !== productId)
  }

  const clearCart = () => {
    cart.value = []
  }

  const totalItems = computed(() =>
    cart.value.reduce((total, item) => total + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    cart.value.reduce((total, item) => total + item.price * item.quantity, 0)
  )

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  }
}
