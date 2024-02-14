
export async function getProductsByCategory(category: number, qty: number) {

    //  MAX AMOUNT
    // const qty = 100

    try {

        const response = await fetch(
            `https://api-beta.saasargentina.com/v1/productos?busqueda=&datosextras=&desde=0&cantidad=${qty}&iddeposito=1&mostrarimagenes=1&idrubro=${category}&orden=nombre&iue=PuaNYqpDhRBJ7K80I8WC&S=epqr6c893g5khekkir9s0l6k6n&_=1700488253028`
        )

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`)
        }

        const products = await response.json()

        console.log("LENGTH.......", products.resultados.length)

        return products.resultados

    } catch (error: any) {

        console.error(`Error en cargarProductos: ${error.message}`);
    }

}