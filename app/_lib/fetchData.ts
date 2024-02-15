export const fetchData = async (url: string) => {
    
    try {

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`)
        }

        const json = await response.json()

        return json

    } catch (error: any) {

        console.error(`Error en fetchData: ${error.message}`)
    }
}