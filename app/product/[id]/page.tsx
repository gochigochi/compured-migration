import AddToCart from "@/app/_components/add_to_cart/AddToCart";
import { fetchData } from "@/app/_lib/fetchData"

export default async function ProductDetailPage(
    { searchParams }:
    { searchParams: { [key: string]: string | string[] | undefined } }
) {

    const { resultados: product } = await fetchData(`https://api-alfa.saasargentina.com/v0.2/productos/${searchParams.id}?iue=PuaNYqpDhRBJ7K80I8WC&iddeposito=1`)

    return (
        <main className="grid grid-cols-12 gap-8 w-full max-w-screen-xl mx-auto px-14">
            <div className="col-span-5">
{/* product.archivos.imagen */}
            </div>
            <div className="col-span-6 flex flex-col gap-6">
                <h1 className="text-4xl">{product.nombre}</h1>
                <p className="text-3xl">${product.preciofinal}</p>
                <p>{product.nombre}</p>
                <AddToCart product={product} />
            </div>
        </main>
    );
}
