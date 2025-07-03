export interface ProductCardProps {
    id: number;
    title: string;
    origin: string;
    price: number;
    currency: 'RUB' | 'USD' | 'EUR';
    imageUrl?: string;
    status: boolean;
}
