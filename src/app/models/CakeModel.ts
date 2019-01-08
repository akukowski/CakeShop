export interface CakeModel {
    id?: number;
    image?: string | File;
    name?: string;
    description?: string;
    portions?: number;
    price?: number;
    price_portions?: number;
}