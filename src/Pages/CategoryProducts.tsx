import { useEffect, useState } from "react"
import type { ProductsType } from "../Types/Products"
import { useParams } from "react-router"
import Slug from "../Services/SlugService"

function CategoryProducts(){

const {slug} = useParams()
 
const  [Category,setCategory] = useState<ProductsType[]>([])

useEffect(()=>{

    Slug(slug!).then(setCategory)

},[slug])


return  <>


<main className="category-products-page">

  {/* Category Header */}
  <section className="category-products-header">
    <div className="container">
      <nav className="category-breadcrumb">
        <a href="/">Home</a>
        <i className="bi bi-chevron-right"></i>
        <a href="/categories">Categories</a>
        <i className="bi bi-chevron-right"></i>
        <span>Category Name</span>
      </nav>

      <div className="category-header-content">
        <div>
          <span className="category-label">EXPLORE COLLECTION</span>
          <h1>Category Name</h1>
          <p>
            Discover our collection and find the perfect products
            that match your style and needs.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Products Section */}
  <section className="category-products-content">
    <div className="container">

      <div className="products-toolbar">
        <div>
          <h2>Our Products</h2>
          <p>Showing all products in this category</p>
        </div>

      
      </div>

      <div className="row g-4">

        {/* Product Card */}
      
      {Category.map((category)=>   <div className="col-6 col-md-4 col-lg-3">
          <div className="category-product-card" key={category.id}>

            <div className="category-product-image">
              <img src={category.images[0]} alt="Product Name" />
              <button className="wishlist-btn">
                <i className="bi bi-heart"></i>
              </button>
            </div>

            <div className="category-product-info">
              <span className="product-category">{category.category}</span>
              <h5>{category.title}</h5>

              <div className="product-rating">
                <i className="bi bi-star-fill"></i>
                <span>4.5</span>
              </div>

              <div className="product-bottom">
                <span className="product-price">${category.price}</span>
                <button className="add-cart-btn">
                  <i className="bi bi-bag-plus"></i>
                </button>
              </div>
            </div>

          </div>
        </div> )}

        {/* Repeat Product Card */}
        
      </div>
    </div>
  </section>

</main>



</>


}

export default CategoryProducts