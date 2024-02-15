"use client"

import React from 'react'
import QtySelector from '../qty_selector/QtySelector'
import PrimaryButton from '../buttons/PrimaryButton'
import { useState } from 'react'

const AddToCart = ({ productid, stock} : { productid: string, stock: string }) => {

  const [qty, setQty] = useState<string>("1")

  return (
    <div className="flex gap-4">
        <QtySelector amount={parseInt(stock)} setQty={setQty} />
        <PrimaryButton action={()=>console.log("add to cart", qty)}>Agregar al carrito</PrimaryButton>
    </div>
  )
}

export default AddToCart