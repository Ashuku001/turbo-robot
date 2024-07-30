'use client'
import { Product } from "@/types"
import Currency from "@/components/ui/Currency"
import { ShoppingCartIcon } from "lucide-react"
import { MouseEventHandler } from "react"
import { useCart } from "@/hooks/use-Cart-Store"
import { formatter } from "@/utils/utils"

interface InfoProps {
    data: Product
}
function Info({data}: InfoProps) {

    const cart = useCart()
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data)
    }
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 items-end justify-between">
                <p className="text-2xl text-gray-900">
                    {formatter.format(parseFloat(data?.price))}
                </p>
            </div>
            <hr  className="my-4"/>
            {/* <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size: </h3>
                    <div>
                        {data?.size?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color: </h3>
                    <div 
                        className="h-6 w-6 rounded-full border border-gray-600"
                        style={{backgroundColor: data?.color?.value}}
                    />
                </div>
            </div> */}
            <div className="mt-10 flex items-center gap-x-3">
                <button onClick={onAddToCart} className="flex items-center gap-x-2 text-white bg-black rounded-full py-2 px-4">
                    Add To Cart
                    <ShoppingCartIcon />
                </button>
            </div>
        </div>
    )
}

export default Info
