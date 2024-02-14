const Search = () => {

    const handleSearch = (formData: FormData) => {
        console.log(formData.get("search"))
    }

    return (
        <form action={handleSearch}>
            <input
                id="search"
                name="search"
                type="text"
                placeholder="qué buscas..."
            />
        </form>
    )
}

export default Search