import Banners from "./_components/banners/Banners";
import FeaturedProducts from "./_components/featured_products/FeaturedProducts";

export default async function Home() {

  return (
    <main className="flex flex-col gap-8 w-full max-w-screen-xl mx-auto px-14">
        <Banners />
        <FeaturedProducts key="129" catId="129" qty={10} />
    </main>
  );
}
