export interface ProductItem {
    id: number,
    name: string,
    description: string,
    img: string,
}

export interface ProductItemStore {
    items: ProductItem[]
}