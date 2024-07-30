"use client"

import { Product } from "@/types"
import { useRouter } from "next/navigation"
import Image from "next/image"
import IconButton from "@/components/ui/Icon-Button"
import {  Expand, ShoppingCart } from "lucide-react"
import {formatter} from "@/utils/utils"
import { MouseEventHandler } from "react"
import { usePreviewModal } from "@/hooks/use-Preview-modal"
import { useCart } from "@/hooks/use-Cart-Store"

interface ProductCard {
    data: Product
}
const ProductCard = ({data}: ProductCard) => {
    const router = useRouter()
    const previewModal = usePreviewModal()
    const cart = useCart()


    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }
    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        previewModal.onOpen(data)
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data)
    }


    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and actions */}
        <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image 
                src={data?.images?.[0]?.url}
                fill
                alt=""
                className="aspect-square object-cover rounded-md"
            />
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                <div className="flex gap-x-6 justify-center">
                    <IconButton
                        onClick={onPreview}
                        icon={<Expand size={20} className="text-gray-600" />}
                    />
                    <IconButton
                        onClick={onAddToCart}
                        icon={<ShoppingCart size={20} className="text-gray-600" />}
                    />
                </div>
            </div>
        </div>
        {/* Description */}
        <div>
            <p className=" font-semibold line-clamp-2">
                {data.name}
            </p>
            <p className="text-sm text-gray-500">
                {data.category?.name}
            </p>
            <div className="flex items-center justify-between">
                {formatter.format(parseFloat(data.price))}
            </div>
        </div>
        </div>
    )
}

export default ProductCard
