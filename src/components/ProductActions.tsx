import {ActionButton} from "./ActionButton";
import {useState} from "react";
import {Heart, ShoppingCart} from "lucide-react";

export const ProductActions: React.FC<{ id: number; status: boolean }> = ({id, status}) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="mt-4 flex gap-2">
            <ActionButton
                onClick={(e) => {
                    e.stopPropagation();
                    setLiked((prev) => !prev);
                }}
                variant="default"
            >
                {liked ? (
                    <Heart className="w-5 h-5 text-red-500 fill-red-500"/>
                ) : (
                    <Heart className="w-5 h-5 text-gray-400"/>
                )}
            </ActionButton>

            <ActionButton
                disabled={!status}
                onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Добавлен товар с id - ${id}`);
                }}
                variant="black"
            >
                <div className="flex items-center gap-1">
                    {status && <ShoppingCart className="w-4 h-4 mr-1"/>}
                    {status ? "Добавить в корзину" : "Нет в наличии"}
                </div>
            </ActionButton>
        </div>
    );
};
