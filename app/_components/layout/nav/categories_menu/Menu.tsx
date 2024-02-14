import { useCallback } from 'react'
import Link from 'next/link'
import { Categories } from '@/app/types'
import withClickOutside from '@/app/_hocs/withClickOutside'
import { toFriendlyUrl } from '@/app/_lib/toFriendlyUrl'
import { useSearchParams } from 'next/navigation'

const Menu = ({
    categories,
    action
}: {
    categories: Categories,
    action: () => void
}) => {

    const searchParams = useSearchParams()

    const createQueryString = useCallback(

        (name: string, value: string) => {

          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        []
      )

    return (
        <ul className="max-w-md mx-auto py-4 bg-white rounded-lg light-shadow">
            {
                categories.map(category => {
                    return (
                        <li key={category.idrubro}>
                            <Link
                                className="p-6 block hover:bg-blue-100 rounded-full m-2"
                                href={`/products/${category.idrubro}`}
                                as={`${toFriendlyUrl(category.nombre)}?${createQueryString("categ", category.idrubro)}`}
                            >
                                {category.nombre}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default withClickOutside(Menu)