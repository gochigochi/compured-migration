export const sanitizeTerm = (term: string) => {
    const sanTerm = term
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "-")

    return sanTerm
}