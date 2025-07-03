import clsx from 'clsx';
import {Camera} from "lucide-react";
import React from "react";


interface ProductImageProps {
    imageUrl?: string;
    title: string;
    status: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({imageUrl, title, status}) => {
    return (
        <div
            className={clsx(
                "w-full sm:w-[150px] h-[200px] sm:h-[150px] overflow-hidden rounded-md flex items-center justify-center",
                (!imageUrl || !status) && "bg-gray-100"
            )}
        >
            {imageUrl ? (
                <img src={imageUrl} alt={title} className="w-full h-full object-contain"/>
            ) : (
                <Camera className="w-20 h-20 text-gray-400 opacity-50"/>
            )}
        </div>
    );
};