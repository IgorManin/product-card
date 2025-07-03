import Infinix from '../assets/Infinix.jpeg';

export const mockProducts = [
    {
        id: 1,
        title: 'Смартфон Infinix',
        origin: 'Китай',
        price: 34902,
        currency: 'USD',
        imageUrl: Infinix,
        status: true,

    },
    {
        id: 2,
        title: 'Смартфон Poco',
        origin: 'Германия',
        price: 2125027,
        currency: 'RUB',
        status: false,
    },
] as const;
