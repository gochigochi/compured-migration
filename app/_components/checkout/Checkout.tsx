"use client"

import { useSelector } from "react-redux"
import type { RootState } from '@/app/_redux/store'
import type { CartProduct } from '@/app/types'
import { getTotal } from "@/app/_lib/getTotal"

const SHIPPING = 2000

const Checkout = () => {

    const cartProducts = useSelector<RootState, CartProduct[]>((state) => state.cartReducer.products)
    const { subtotal, total } = getTotal(cartProducts, SHIPPING)

    return (
        <section className="rounded-lg border border-slate-200 p-4" aria-labelledby="cart-summary">
            <h2 id="cart-summary">Resumen de la compra</h2>
            {
                cartProducts.length !== 0 ?
                    <dl className="grid grid-cols-1 divide-y">
                        {
                            cartProducts.map(product => {
                                return (
                                    <div className="flex justify-between pt-4 mt-4">
                                        <dt className="w-56 text-slate-400 text-nowrap text-ellipsis overflow-hidden">{product.nombre}</dt>
                                        <dd>${parseInt(product.preciofinal) * product.qty}</dd>
                                    </div>
                                )
                            })
                        }
                        <div className="flex justify-between pt-4 mt-4">
                            <dt className="font-medium">Subtotal</dt>
                            <dd>${subtotal}</dd>
                        </div>
                        <div className="flex justify-between pt-4 mt-4">
                            <dt className="w-56 text-slate-400 text-nowrap text-ellipsis overflow-hidden">Envío</dt>
                            <dd>${SHIPPING}</dd>
                        </div>
                        <div className="flex justify-between font-bold text-xl pt-4 mt-4">
                            <dt>Total</dt>
                            <dd>${total}</dd>
                        </div>
                    </dl>
                    :
                    <dl className="grid grid-cols-1 divide-y">
                        <div className="flex justify-between pt-4 mt-4">
                            <dt className="font-medium">Subtotal</dt>
                            <dd>$0</dd>
                        </div>
                        <div className="flex justify-between pt-4 mt-4">
                            <dt className="w-56 text-slate-400 text-nowrap text-ellipsis overflow-hidden">Envío</dt>
                            <dd>$0</dd>
                        </div>
                        <div className="flex justify-between font-bold text-xl pt-4 mt-4">
                            <dt>Total</dt>
                            <dd>$0</dd>
                        </div>
                    </dl>
            }
        </section>
    )
}

export default Checkout