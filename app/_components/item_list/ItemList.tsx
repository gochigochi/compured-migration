"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import type { RootState } from '@/app/_redux/store'
import type { CartProduct } from '@/app/types'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/_redux/store'
import { removeProduct, clearCart } from '@/app/_redux/features/cartSlice'
import SecondaryButton from '../buttons/SecondaryButton'
import PrimaryButton from '../buttons/PrimaryButton'

const ItemList = () => {

    const router = useRouter()
    const cartProducts = useSelector<RootState, CartProduct[]>((state) => state.cartReducer.products)
    const dispatch = useDispatch<AppDispatch>()

    const handleRemove = (id: string) => dispatch(removeProduct({ id }))
    const handleClear = () => dispatch(clearCart())

    return (
        <>
            {
                cartProducts.length !== 0 ?
                    <div>
                        {
                            cartProducts.map(product => {
                                return (
                                    <div key={product.idproducto} className="grid grid-cols-12 gap-7 py-7 border-b border-gray-200">
                                        <div className="col-span-3 relative rounded-lg p-5 overflow-hidden w-full aspect-square border border-gray-200">
                                            <Image
                                                src={!!product.imagen_url ? product.imagen_url : "https://drive.google.com/uc?export=view&id=18QHvosnLrPYvhNFd-acD__t5hLggVmg2"}
                                                alt={product.nombre}
                                                className="object-contain"
                                                sizes="(max-width: 650px) 80vw, 33vw"
                                                fill
                                            />
                                        </div>
                                        <div className="col-span-9 flex flex-col gap-2">
                                            <h3 className="text-nowrap flex-shrink-1 text-ellipsis overflow-hidden w-full">{product.nombre}</h3>
                                            <p>
                                                $<span className="font-bold">{product.preciofinal}</span>
                                                <span className="ml-2">({product.qty})</span>
                                            </p>
                                            <div>
                                                <SecondaryButton action={() => handleRemove(product.idproducto)}>Quitar</SecondaryButton>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="mt-4">
                            <SecondaryButton action={handleClear}>Vaciar carrito</SecondaryButton>
                        </div>
                    </div> :
                    <div className="grid grid-cols-12 gap-7 py-7 border-b border-gray-200">
                        <div className="col-span-3 relative rounded-lg p-5 overflow-hidden w-full aspect-square border border-gray-200">
                            <Image
                                src="https://drive.google.com/uc?export=view&id=18QHvosnLrPYvhNFd-acD__t5hLggVmg2"
                                alt=""
                                className="object-contain"
                                sizes="(max-width: 650px) 80vw, 33vw"
                                fill
                            />
                        </div>
                        <div className="col-span-9 flex flex-col gap-2">
                            <h3 className="text-nowrap flex-shrink-1 text-ellipsis overflow-hidden w-full">Agrega tu primer producto</h3>
                            <div>
                                <PrimaryButton action={() => router.push("/")}>Ver productos</PrimaryButton>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ItemList