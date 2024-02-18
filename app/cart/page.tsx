import dynamic from "next/dynamic"

const ItemList = dynamic(() => import("../_components/item_list/ItemList"), { ssr: false })
const Checkout = dynamic(() => import("../_components/checkout/Checkout"), { ssr: false })

export default function CartPage() {
    return (
        <main className="grid grid-cols-12 gap-8 w-full max-w-screen-xl mx-auto my-8 px-14">
            <div className="col-span-7 border-t-[1px] border-gray-200">
                <ItemList />
            </div>
            <div className="col-span-5">
                <Checkout />
            </div>
        </main>
    )
}