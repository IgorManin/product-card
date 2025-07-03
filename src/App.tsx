import {ProductCard} from "./components/ProductCard";
import {useEffect, useState} from "react";
import {getProducts} from "./api/products";
import {ProductCardSkeleton} from "./components/ProductCardSkeleton";
import type {ProductCardProps} from "./types";


function App() {
    const [products, setProducts] = useState<ProductCardProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="space-y-4 px-4 py-6">
            <h1 className="text-2xl font-bold text-center">Каталог</h1>
            {isLoading ? (
                <ProductCardSkeleton/>
            ) : (
                products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))
            )}
        </div>
    );
}

export default App;
