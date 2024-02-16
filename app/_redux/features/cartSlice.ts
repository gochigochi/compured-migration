import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Product } from "@/app/types"


type CartProduct = Product & { qty: number }

type CartState = {
    products: CartProduct[]
}

const initialState: CartState = {
    products: []
}

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartProduct>) => {

            const index = state.products.findIndex(product => product.idproducto === action.payload.idproducto)

            if(index === -1) {

                state.products.push(action.payload)

            } else {

                state.products[index].qty += action.payload.qty
            }
        },
        removeProduct: (state, action: PayloadAction<{ id: string }>) => {
            state.products.findIndex(product => product.idproducto === action.payload.id)
        },
        clearCart: () => {

        },
    }
})

export const { addProduct, removeProduct, clearCart } = cart.actions
export default cart.reducer