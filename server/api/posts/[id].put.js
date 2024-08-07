export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const data = await $fetch(url, {
        method: 'PUT',
        body
    })
    return data
})