export type Category = {
    idrubro: string
    nombre: string
    idrubropadre: string
}

export type Categories = Category[]

export type Product = {
    idproducto: string
    stockactual: string
    stockminimo: string
    precio: string
    preciofinal: string
    nombre: string
    url_amigable?: string
    obstienda?: string
    idrubro?: CategoryId
    rubro?: string
    iva?: string
    imagen?: string
    miniatura?: string
    imagen_url?: string
}

export type Products = Product[]
