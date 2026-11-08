import APi from "../Lib/APi";
import type { ProductsType } from "../Types/Products";

interface ProductsResponse {
    products: ProductsType[]
    total: number
    skip: number
    limit: number
}

const GetProducts = async ():Promise<ProductsType[]> => {

    const response = await APi.get<ProductsResponse>('/products')
return response.data.products

}

export default GetProducts