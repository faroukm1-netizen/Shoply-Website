import APi from "../Lib/APi";
import type { CategoryInterface } from "../Types/CateogriesType";

const GetCategories = async ():Promise<CategoryInterface[]> => {

const response = await APi.get<CategoryInterface[]>('/products/categories')

return response.data

} 

export default GetCategories