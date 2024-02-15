import { createArray } from '@/app/_lib/createArray'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

type PropsType = {
  amount: number
  setQty: Dispatch<SetStateAction<string>>
}

const QtySelector = ({ amount, setQty }: PropsType) => {

  const options = createArray(amount)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => setQty(e.target.value)

  return (
    <div>
      <label>Cantidad</label>
      <select name="qty" id="qty" onChange={handleChange}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  )
}

export default QtySelector