import AddToCart from "@/app/_components/add_to_cart/AddToCart";
import ProductsGrid from "@/app/_components/products_grid/ProductsGrid";
import { fetchData } from "@/app/_lib/fetchData"

export default async function CategoryPage(
    { searchParams }:
    { searchParams: { [key: string]: string | string[] | undefined } }
) {

    const {resultados} = await fetchData(`https://api-beta.saasargentina.com/v1/productos?busqueda=&datosextras=&desde=0&iddeposito=1&mostrarimagenes=1&idrubro=${searchParams.categ}&orden=nombre&iue=PuaNYqpDhRBJ7K80I8WC&S=epqr6c893g5khekkir9s0l6k6n&_=1700488253028`)

    return (
        <main className="w-full max-w-screen-xl mx-auto px-14">
            <ProductsGrid products={resultados}/>
        </main>
    );
}
