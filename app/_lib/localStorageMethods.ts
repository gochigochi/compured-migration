
export const setLocalStorage =<T>(key: string, data: T) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    }
    catch (err) {
        console.log(err)
    }
}

export const getLocalStorage = (key: string) => {
    try {
        return JSON.parse(localStorage.getItem(key)!)
    } catch (err) {
        console.log(err)
    }
}