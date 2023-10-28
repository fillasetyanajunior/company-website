export interface Products{
    product_id: string;
    name: string;
    type: string;
    technology: string;
    price: number;
    thumbnail: string;
}

export interface FieldProduct{
    key: React.Key;
    product_id: string;
    name: string;
    type: string;
    technology: string;
    price: number;
    thumbnail: string;
    action: []
}

export interface ProductActionType {
    url: string;
    pageIndex: number;
    pageSize: number;
    token: string | undefined;
}

export interface ProductAction {
    product: Products;
    url: string;
    token: string | undefined;
}

export interface Paginates{
    page: number
}

export interface FieldType{
    username?: string;
    password?: string;
    remember?: string;
};