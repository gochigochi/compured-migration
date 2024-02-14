"use client"

import { Products } from "@/app/types"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


type PropsTypes = {
  products: Products
}

const ProductsSwiper = ({ products }: PropsTypes) => {

  console.log(products)

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
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default ProductsSwiper