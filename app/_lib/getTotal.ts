import { Cart } from "../types"

export const getTotal = (products: Cart, shipping = 0) => {

    const subtotal = products.reduce((sum, product) => sum + parseInt(product.preciofinal) * product.qty, 0)
    const total = subtotal + shipping

    return { subtotal, total }
}