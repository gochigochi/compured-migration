"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/app/types'
import useQueryString from '@/app/_hooks/useQueryString'

const ProductCard = ({ product }: { product: Product }) => {

    const { queryString } = useQueryString("id", product.idproducto)

    return (
        <Link href={`/product/${product.url_amigable}?${queryString}`}>
            <article className="card light-shadow p-4">
                <header className="relative w-full min-h-[150px]">
                    <Image
                        src={!!product.imagen_url ? product.imagen_url : "https://drive.google.com/uc?export=view&id=18QHvosnLrPYvhNFd-acD__t5hLggVmg2"}
                        alt={product.nombre}
                        className="object-contain"
                        sizes="(max-width: 650px) 80vw, 33vw"
                        fill
                    />
                </header>
                <div className="flex flex-col gap-2">
                    <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-xl">{product.nombre}</h3>
                    <p>${product.preciofinal}</p>
                    <p>{product.nombre}</p>
                </div>
            </article>
        </Link>
    )
}

export default ProductCard