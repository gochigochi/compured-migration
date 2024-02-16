"use client"

import Link from 'next/link'
import QtySelector from '../qty_selector/QtySelector'
import { useRouter } from 'next/navigation'
import PrimaryButton from '../buttons/PrimaryButton'
import { useState } from 'react'
import { addProduct } from '@/app/_redux/features/cartSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/_redux/store'
import { Product } from '@/app/types'

const AddToCart = ({ product }: { product: Product }) => {

  const router = useRouter()
  const [qty, setQty] = useState<number>(1)
  const dispatch = useDispatch<AppDispatch>()

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, qty: qty }))
    router.push("/cart")
  }

  return (
    <div className="flex gap-4">
      <QtySelector amount={parseInt(product.stockactual)} setQty={setQty} />
      <PrimaryButton action={handleAddToCart}>Agregar al carrito</PrimaryButton>
    </div>
  )
}

export default AddToCart