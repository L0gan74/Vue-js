export interface ProductItem {
    id: number,
    name: string,
    description: string,
    img: string,
}

export interface AllProductItem {
    id: number,
    name: string,
    description: string,
    img: string,
    categories: string,
    alldescription: string,
}

export interface BlogsItem {
    id: number,
    name: string,
    description: string,
    img: string,
    date: string,
    categories: string,
    views: string
}

export interface ProductItemStore {
    items: ProductItem[],
    blogs: BlogsItem[]
}

