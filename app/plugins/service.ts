import { service, type ServiceType } from "~/services"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      service,
    },
  }
})

// Augment type cho Nuxt App
declare module '#app' {
  interface NuxtApp {
    $service: ServiceType
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $service: ServiceType
  }
}