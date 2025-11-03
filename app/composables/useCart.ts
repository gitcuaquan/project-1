import type { ITemsTapmed } from "~/model"

export const useCart = () => {
  const { isAuthenticated } = useAuth()
  const { error } = useToast()
  const cart = useState<ITemsTapmed[]>('cart', () => [])
  const addToCart = (product: ITemsTapmed) => {
    const existingProduct = cart.value.find((item) => item.ma_vt === product.ma_vt)
    if(product.quantity! <=0){
      removeFromCart(product.ma_vt)
      return
    }
    if (existingProduct) {
      existingProduct.quantity = product.quantity
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  const getQtyById = (productId: string) => {
    const product = cart.value.find((item) => item.ma_vt === productId)
    return product ? product.quantity || 0 : 0
  }

  const removeFromCart = (productId: string) => {
    cart.value = cart.value.filter((item) => item.ma_vt !== productId)
  }

  const clearCart = () => {
    cart.value = []
  }

  const totalItems = computed(() =>
    cart.value.reduce((total, item) => total + (item.quantity || 0), 0)
  )

  const totalPrice = computed(() =>
    cart.value.reduce((total, item) => total + item.gia_nt2 * (item.quantity || 0), 0)
  )

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
    getQtyById
  }
}
