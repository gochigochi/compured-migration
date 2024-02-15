import Link from 'next/link'
import useQueryString from '@/app/_hooks/useQueryString'
import { Category } from '@/app/types'
import { toFriendlyUrl } from '@/app/_lib/toFriendlyUrl'

const Category = ({ category } : { category: Category}) => {

    const { queryString } = useQueryString("categ", category.idrubro)

    return (
        <li>
            <Link
                className="p-6 block hover:bg-red-200 rounded-full m-2"
                href={`/products/${category.idrubro}`}
                as={`${toFriendlyUrl(category.nombre)}?${queryString}`}
            >
                {category.nombre}
            </Link>
        </li>
    )
}

export default Category