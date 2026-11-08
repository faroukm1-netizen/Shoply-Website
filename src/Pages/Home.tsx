import { useEffect, useState } from "react"
import type { ProductsType } from "../Types/Products"
import GetProducts from "../Services/ProductsService"

function Home(){

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


return <>

<section className="hero-section ">
  <div className="container my-5">
    <div className="row align-items-center">

     
      <div className="col-lg-6">
        <div className="hero-content">

          <span className="hero-label">
            NEW COLLECTION 2026
          </span>

          <h1>
            Discover Your
            <span>Perfect Style</span>
          </h1>

          <p>
            Explore our latest collection of products.
            Find everything you need with the best quality
            and amazing prices.
          </p>

          <div className="hero-actions">
            <a href="/shop" className="btn btn-primary">
              Shop Now
              <i className="bi bi-arrow-right"></i>
            </a>

            <a href="/shop" className="hero-link">
              Explore Collection
            </a>
          </div>

          <div className="hero-benefits">
            <div>
              <i className="bi bi-truck"></i>
              <span>Free Shipping</span>
            </div>

            <div>
              <i className="bi bi-shield-check"></i>
              <span>Secure Payment</span>
            </div>
          </div>

        </div>
      </div>

   
      <div className="col-lg-6">
        <div className="hero-image-wrapper">

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
            alt="Shoply Shopping Collection"
            className="hero-image"
          />

        </div>
      </div>

    </div>
  </div>
</section>

<section className="products-section py-5">
  <div className="container">

   
    <div className="products-heading d-flex justify-content-between align-items-end mb-4">

      <div>
        <span className="section-subtitle">OUR COLLECTION</span>
        <h2>Featured Products</h2>
        <p>Discover our handpicked products just for you.</p>
      </div>

      <a href="/shop" className="view-all-link">
        View All Products
        <i className="bi bi-arrow-right"></i>
      </a>

    </div>

   
    <div className="row g-4">

  
     
      
{Products.map((product) => (
  <div className="col-6 col-lg-3" key={product.id}>

    <div className="product-card">

      <div className="product-image">
        <img
          src={product.images[0]}
          alt={product.title}
          loading="lazy"
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

</>


}

export default Home