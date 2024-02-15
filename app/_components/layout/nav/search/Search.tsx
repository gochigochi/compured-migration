import { search } from '@/app/_actions/search'
import withClickOutside from '@/app/_hocs/withClickOutside'
import { sanitizeTerm } from '@/app/_lib/sanitizeTerm'

const Search = () => {

    const handleSubmit = async (formData: FormData) => {

        const term = formData.get("term") as string

        if (term) {

            const sanTerm = sanitizeTerm(term)

            const response = await search(sanTerm)
            
        }
    }

    return (
        <form 
            action={handleSubmit} 
            className="flex gap-4 items-center light-shadow max-w-96 mx-auto rounded-full overflow-hidden bg-white"
        >
            <input
                id="term"
                name="term"
                type="text"
                placeholder="Estoy buscando..."
                className="p-4 grow rounded-tl-full rounded-bl-full focus:outline-none"
            />
            <button type="submit" className="basis-12">
                <i className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </i>
            </button>
        </form>
    )
}

export default withClickOutside(Search)