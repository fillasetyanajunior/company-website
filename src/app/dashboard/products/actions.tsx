import axios from "axios";
import useSWR from "swr";
import { ProductActionType, ProductAction } from "./interface";

export async function AddAction(params: ProductAction) {
    const res = await axios.post(params.url + "product", {
        name: params.product.name,
        type: params.product.type,
        technology: params.product.technology,
        price: params.product.price,
        thumbnail: params.product.thumbnail,
        },{
            headers: {
                "Authorization": "Bearer " + params.token,
                "Cache-Control": "no-store",
                "Content-Type": "multipart/form-data"
            }
        })
    return res.status
}

export async function UpdateAction(params: ProductAction) {
    const res = await axios.put(params.url + `product/update/${params.product.product_id}`, {
        name: params.product.name,
        type: params.product.type,
        technology: params.product.technology,
        price: params.product.price,
        thumbnail: params.product.thumbnail,
        },{
            headers: {
                "Authorization": "Bearer " + params.token,
                "Cache-Control": "no-store",
                "Content-Type": "multipart/form-data"
            }
        })
    return res.status
}

export async function DeleteAction(params: ProductAction) {
    const res = await axios.delete(params.url + `product/delete/${params.product.product_id}`, {
        headers: {
            "Authorization": "Bearer " + params.token,
            "Cache-Control": "no-store",
        }
    })
    return res.status
}

export function ProductAction(params: ProductActionType) {
    const fetcher = url => axios.get(params.url + `product?page=${params.pageIndex}&pageSize=${params.pageSize}` , {
        headers: {
            "Authorization": "Bearer " + params.token,
            "Cache-Control": "no-store",
        }}).then(res => res.data);
    const { data, error, isLoading } = useSWR(`product?page=${params.pageIndex}&pageSize=${params.pageSize}`, fetcher)
    return {
        data: data,
        error: error,
        isLoading: isLoading
    }
}

