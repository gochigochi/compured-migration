"use client"

import { Products } from "@/app/types"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ProductCard from "./ProductCard"


type PropsTypes = {
  products: Products
}

const ProductsSwiper = ({ products }: PropsTypes) => {
  return (
    <div className="relative z-0 pt-4 pb-12">
      <Swiper
        breakpoints={{
          330: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 3,
          },
          860: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        pagination={{ clickable: false }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          products?.map(product => {
            return (
              <SwiperSlide key={product.idproducto}>
                <ProductCard product={product} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default ProductsSwiper