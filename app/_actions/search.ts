"use server"

export const search = async (term: string) => {

    const url = `https://api-alfa.saasargentina.com/v0.2/productos?desde=0&cantidad=100&orden=nombre&mostrarimagenes=1&iue=PuaNYqpDhRBJ7K80I8WC&busqueda=${term}`

    try {

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`)
        }

        const products = await response.json()

        return products.resultados

    } catch (error: any) {

        console.error("Error:", error.message)
    }
}