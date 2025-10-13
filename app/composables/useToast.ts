// composables/useToast.ts
type ToastType = 'success' | 'error' | 'loading'

export interface Toast {
  id: string
  message: string
  type: ToastType
  duration?: number
}

const toasts = ref<Toast[]>([])

export function useToast() {
  const show = (message: string, type: ToastType = 'success', duration = 3000) => {
    const id = Math.random().toString(36).substring(2, 9)
    toasts.value.push({ id, message, type, duration })

    if (type !== 'loading') {
      setTimeout(() => {
        remove(id)
      }, duration)
    }
  }

  const remove = (id: string) => {
    const index = toasts.value.findIndex(t => t.id === id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  const success = (message: string, duration?: number) => 
    show(message, 'success', duration)
  
  const error = (message: string, duration?: number) => 
    show(message, 'error', duration)
  
  const loading = (message: string) => 
    show(message, 'loading')

  return {
    toasts: readonly(toasts),
    success,
    error,
    loading,
    remove
  }
}