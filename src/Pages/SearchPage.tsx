import { useState } from "react"
import type { ProductsType } from "../Types/Products"
import axios from "axios"




function Search(){

const [input,setInput] = useState<string>("")
const [search,setSearch] = useState<ProductsType[]>([])



const Api = async()=>{
    const response = await axios.get(`https://dummyjson.com/products/search?q=${input}`)
    setSearch(response.data.products)
}

Api()





return <>

<main className="search-page">

  
  <section className="search-header">
    <div className="container text-center my-5">
      <span className="search-label">FIND YOUR FAVORITE</span>
      <h1>Search Products</h1>
      <p>Discover the products you're looking for.</p>

      <div className="search-box">
        <i className="bi bi-search"></i>
        <input
          type="search"
          onChange={(e)=> setInput(e.target.value) }
          placeholder="Search for products..."
        />
        <button type="button" onClick={Api}>Search</button>
      </div>
    </div>
  </section>

 
  <section className="search-results">
    <div className="container">

      <div className="results-heading">
        <h2>Search Results</h2>
        <span>{search.length} Products Found</span>
      </div>

      <div className="row g-4">

      {search.map((product)=>   <div className="col-6 col-md-4 col-lg-3">
          <div className="search-product-card" key={product.id}>
            <div className="search-product-image">
              <img src={product.images[0]} alt="Product" />
              <button className="search-wishlist">
                <i className="bi bi-heart"></i>
              </button>
            </div>

            <div className="search-product-info">
              <span className="product-category">{product.category}</span>
              <h5>{product.title}</h5>

              <div className="product-bottom">
                <span className="product-price">${product.price}</span>
                <button className="add-cart-btn">
                  <i className="bi bi-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
 )}


      </div>

    
      <div className="search-empty">
        <i className="bi bi-search"></i>
        <h3>No Products Found</h3>
        <p>Try searching with a different keyword.</p>
      </div>

    </div>
  </section>

</main>

</>

}

export default Search