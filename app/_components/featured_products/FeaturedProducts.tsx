import { getProductsByCategory } from "@/app/_lib/getProductsByCategory"
import ProductsSwiper from "../swipers/products_swiper/ProductsSwiper"

type PropsTypes = {
  catId: string
  qty: number
}

const FeaturedProducts = async ({ catId, qty } : PropsTypes) => {

  const products = await getProductsByCategory(parseInt(catId), qty)

  return (
    <section>
      <h2 className="mb-4">Productos Destacados</h2>
      <ProductsSwiper products={products} />
    </section>
  )
}

export default FeaturedProducts