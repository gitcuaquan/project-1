export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    body.created_at = new Date()
    const newPost = await Post.create(body)
    return newPost
  } catch (error) {
    return error
  }
})
