
export default defineNuxtRouteMiddleware((to, from) => {

    const { isAuthenticated } = useAuth()
    if (!isAuthenticated.value) {
        // return navigateTo('/')
        return abortNavigation("Bạn cần đăng nhập để truy cập trang này.")
    }
})
