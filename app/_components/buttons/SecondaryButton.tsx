import { ReactNode } from 'react'

const SecondaryButton = ({
    children,
    action,
} : {
    children: ReactNode
    action: () => void
}) => {
  return (
    <button onClick={action} className="hover:opacity-70 cursor-pointer transition underline underline-offset-1">
        {children}
    </button>
  )
}

export default SecondaryButton