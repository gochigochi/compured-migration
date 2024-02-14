import { useState } from "react"

const useToggle = () => {

    const [open, setOpen] = useState(false)

    return { open, setOpen }

}

export default useToggle