export default defineEventHandler(async () => {
    const url = 'https://fakestoreapi.com/products'
    const data = await $fetch(url)

    return data
})