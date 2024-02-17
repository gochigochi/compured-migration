import { ReactNode } from 'react'

const SecondaryButton = ({
    children,
    action,
} : {
    children: ReactNode
    action: () => void
}) => {
  return (
    <div onClick={action} className=" hover:opacity-70 cursor-pointer transition underline underline-offset-1">
        {children}
    </div>
  )
}

export default SecondaryButton