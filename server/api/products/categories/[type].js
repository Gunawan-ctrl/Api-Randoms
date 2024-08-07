export default defineEventHandler(async (event) => {
    const type = getRouterParam(event, 'type')
    const url = `https://fakestoreapi.com/products/category/${type}`
    const data = await $fetch(url)

    return data
})