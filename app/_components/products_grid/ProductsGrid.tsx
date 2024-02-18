import { Products } from '@/app/types'
import React from 'react'
import ProductCard from '../swipers/products_swiper/ProductCard'

const ProductsGrid = ({ products } : { products: Products}) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
            products.map(product => {
                return(
                    <ProductCard product={product} />
                )
            })
        }
    </div>
  )
}

export default ProductsGrid