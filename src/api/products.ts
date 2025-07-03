import {mockProducts} from '../data/products';

export const getProducts = (): Promise<typeof mockProducts> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProducts);
        }, 1000); // имитация задержки
    });
};
