import APi from "../Lib/APi"
import type { ProductsType } from "../Types/Products"

interface ProductsResponse {
    products: ProductsType[]
    total: number
    skip: number
    limit: number
}



const Slug = async (slug:string):Promise<ProductsType[]> => {

const response = await APi.get<ProductsResponse>(`/products/category/${slug}`)
    return response.data.products
}

export default Slug