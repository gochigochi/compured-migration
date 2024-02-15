import { fetchData } from '@/app/_lib/fetchData'
import BannerSwiper from '../swipers/banner_swiper/BannerSwiper'

const Banners = async () => {

    const response = await fetchData(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=technology-products&image_type=photo&orientation=horizontal&page=4&per_page=4`)

    const formattedResponse = response.hits.map(
        (banner: { id: number, webformatURL: string }) => {
            return { 
                id: banner.id, 
                url: banner.webformatURL 
            }
        }
    )

    return <BannerSwiper banners={formattedResponse} />
}

export default Banners