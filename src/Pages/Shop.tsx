import { useEffect, useState } from "react"
import type { ProductsType } from "../Types/Products"
import GetProducts from "../Services/ProductsService"

function Shop(){

const [Products,setProducts] = useState<ProductsType[]>([])
const [loading,setLoading] = useState<boolean>(true)

useEffect(()=>{

GetProducts().then(setProducts)
.catch((error)=>console.log(error)
)

.finally(()=>{
  setLoading(false)
})
  
},[])

if (loading) {
  return <div className="text-center fs-3 my-3">
    Products is Loading .......
  </div>
}


return   <main className="shop-page">

  <section className="shop-header">
    <div className="container my-5">
      <span className="shop-breadcrumb">Home / Shop</span>

      <h1>Explore Our Products</h1>

      <p>
        Discover our collection and find your perfect products.
      </p>
    </div>
  </section>

  <section className="shop-content py-5">
    <div className="container">

     
      <div className="row g-4">

      
{Products.map((product) => (
  <div className="col-6 col-lg-3" key={product.id}>

    <div className="product-card">

      <div className="product-image">
        <img
          src={product.images[0]}
          alt={product.title}
        />
        <span className="product-badge">New</span>

        <button className="wishlist-btn" aria-label="Add to wishlist">
          <i className="bi bi-heart"></i>
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h5>{product.title}</h5>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">
          <span className="product-price">${product.price}</span>

          <button className="add-cart-btn" aria-label="Add to cart">
            <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>

    </div>
  </div>
))}
        

      </div>

    </div>
  </section>

</main>




}

export default Shop