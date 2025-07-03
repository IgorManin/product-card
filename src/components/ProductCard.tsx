import React from "react";
import {ProductImage} from "./ProductImage";
import {ProductActions} from "./ProductActions";
import type {ProductCardProps} from "../types";


export const ProductCard: React.FC<ProductCardProps> = ({title, origin, price, currency, imageUrl, status, id}) => {

    const formattedPrice = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency,
    }).format(price / 100);

    const handleCardClick = () => {
        console.log(`Вы перешли в каталог на товар - ${id}`);
    };


    return (
        <div
            onClick={handleCardClick}
            className="cursor-pointer flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-xl shadow bg-white max-w-2xl mx-auto hover:shadow-md transition"
        >
            <ProductImage imageUrl={imageUrl} title={title} status={status}/>
            <div className="flex flex-col justify-between w-full items-center text-center sm:items-start sm:text-left">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold text-black">{title}</h2>
                    <p className="text-gray-600">Страна: {origin}</p>
                    <p className="text-gray-800 font-medium">Цена: {formattedPrice}</p>
                </div>
                <ProductActions id={id} status={status}/>
            </div>
        </div>
    );
};
