import { useSearchParams } from "next/navigation"

const useQueryString = (name: string, value: string) => {

    const searchParams = useSearchParams()

    const params = new URLSearchParams(searchParams.toString())

    params.set(name, value)

    const queryString = params.toString()

    return { queryString }
}

export default useQueryString