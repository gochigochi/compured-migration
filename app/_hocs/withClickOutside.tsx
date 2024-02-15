import { ComponentType, PropsWithChildren, useEffect } from "react"

export default function withClickOutside<T>(WrappedComponent: ComponentType<T>) {

    return (props: PropsWithChildren<T & { action: () => void }>) => {

        const handleClick = (e: MouseEvent) => {
            if ((e.target as any).id === "out") props.action()
        }

        useEffect(() => {

            const scrollWidth = window.innerWidth - document.body.offsetWidth

            document.addEventListener("click", handleClick)
            document.documentElement.style.overflow = "hidden"
            document.documentElement.style.paddingRight = `${scrollWidth}px`

            return () => {
                document.removeEventListener("click", handleClick)
                document.documentElement.style.overflow = ""
                document.documentElement.style.paddingRight = ""
            }

        }, [])

        return (
            <>
                <div className="fixed inset-0 bg-neutral-900/15 z-30"></div>
                <div id="out" className="fixed inset-0 p-32 z-40">
                    <WrappedComponent {...props} />
                </div>
            </>
        )
    }
}