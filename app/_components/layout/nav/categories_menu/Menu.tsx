import { Categories } from '@/app/types'
import withClickOutside from '@/app/_hocs/withClickOutside'
import Category from './Category'

const Menu = ({
    categories,
    action
}: {
    categories: Categories,
    action: () => void
}) => {

    return (
        <ul className="max-w-md mx-auto py-4 bg-white rounded-lg light-shadow">
            {
                categories.map(category => {
                    return (
                        <Category key={category.idrubro} category={category} />
                    )
                })
            }
        </ul>
    )
}

export default withClickOutside(Menu)