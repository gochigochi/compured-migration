"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Banners } from '@/app/types'

const BannerSwiper = ({ banners }: { banners: Banners }) => {

    return (
        <div className="w-full mx-auto overflow-hidden rounded-[20px] translate-z-0 h-96">
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    banners.map((banner) => {
                        return (
                            <SwiperSlide key={banner.id}>
                                <Image
                                    src={banner.url}
                                    alt=""
                                    width={1920}
                                    height={400}
                                    priority
                                    sizes="90vw"
                                    className="object-cover block w-full"
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default BannerSwiper