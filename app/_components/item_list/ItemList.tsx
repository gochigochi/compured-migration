"use client"

import { useSelector } from 'react-redux'
import { RootState } from '@/app/_redux/store'
import { Product } from '@/app/types'

const ItemList = () => {

    const cartProducts = useSelector<RootState, Product[]>((state) => state.cartReducer.products)

    console.log("CART PRODUCTS....", cartProducts)

    return (
        <div>
            {
                cartProducts.length !== 0 ?
                    cartProducts.map(product => {
                        return (
                            <div key={product.idproducto} className="flex gap-7 py-7 border-b border-gray-200">
                                <div className="relative flex-shrink-0 rounded-lg p-5 overflow-hidden w-28 h-28 border border-gray-200">
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3>{product.nombre}</h3>
                                    <p className="font-bold">${product.preciofinal}</p>
                                    <p>x{product.qty}</p>
                                </div>
                            </div>
                        )
                    }) : null
            }
        </div>
    )
}

export default ItemList