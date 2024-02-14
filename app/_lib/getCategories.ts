export async function getCategories() {

    const url = `https://api-beta.saasargentina.com/v1/rubros?idrubro=0&desde=0&cantidad=100&orden=nombre&iue=PuaNYqpDhRBJ7K80I8WC&S=epqr6c893g5khekkir9s0l6k6n&_=1700488253028`

    try {

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`)
        }

        const categories = await response.json()

        return categories

    } catch (error: any) {

        console.error(`Error en cargarProductos: ${error.message}`);
    }
}