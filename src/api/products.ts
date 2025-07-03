import {mockProducts} from '../data/products';


export const getProducts = async (): Promise<typeof mockProducts> => {
    try {
        // здесь мог бы быть fetch/axios
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockProducts);
            }, 1000);
        });
    } catch (error) {
        console.error("Ошибка внутри getProducts:", error);
    }
};
