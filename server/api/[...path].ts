export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const path = event.path.replace('/api/', '')
    const method = event.method

    const targetUrl = `${config.public.apiBase}/${path}`

    // Lọc bỏ các headers không cần thiết và undefined values
    const headers = getHeaders(event)
    const filteredHeaders: Record<string, string> = {}

    for (const [key, value] of Object.entries(headers)) {
        if (value && !['host', 'connection'].includes(key.toLowerCase())) {
            filteredHeaders[key] = value
        }
    }

    try {
        const response = await $fetch(targetUrl, {
            method: method as any,
            body: method !== 'GET' ? await readBody(event) : undefined,
            headers: {
                ...filteredHeaders,
                "api-sse-code": "e0cc6288e60584582eb706fd6c2612e1"
            },
            params: getQuery(event),
        })

        return response
    } catch (error: any) {
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Proxy error'
        })
    }
})