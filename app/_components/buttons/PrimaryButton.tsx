import { ReactNode } from 'react'

const PrimaryButton = ({
    children,
    action,
} : {
    children: ReactNode
    action: () => void
}) => {
  return (
    <button onClick={action} className="bg-red-200 hover:bg-red-400 cursor-pointer transition px-6 py-2 rounded-full">
        {children}
    </button>
  )
}

export default PrimaryButton