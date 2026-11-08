import { useEffect, useState } from "react"
import type { CategoryInterface } from "../Types/CateogriesType"
import GetCategories from "../Services/Categories"
import { Link } from "react-router"

function Category(){

const [categories,setCategories] = useState<CategoryInterface[]>([])

useEffect(()=>{

GetCategories().then(setCategories)
.catch((error)=>console.log(error)
)

},[])



return <>

 <main className="categories-page">

     
      <section className="categories-header">
        <div className="container my-5">

          <span className="categories-breadcrumb">
            Home / Categories
          </span>

          <h1>Explore Categories</h1>

          <p>
            Find exactly what you're looking for.
            Explore our wide range of product categories.
          </p>

        </div>
      </section>

     
      <section className="categories-content py-5">
        <div className="container">

          <div className="categories-heading">
            <div>
              <span>SHOP BY CATEGORY</span>
              <h2>Browse Our Categories</h2>
            </div>
          </div>

          <div className="row g-4">

          {categories.map((category)=>   <div className="col-6 col-md-4 col-lg-3">
              <div className="category-card">

                <div className="category-image">
                  <img
                    src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800"
                    alt={category.name}
                  />
                </div>

                <div className="category-info">
                  <h5>{category.slug}</h5>
                  <Link to={`/category/${category.slug}`}>
                    Explore <i className="bi bi-arrow-right" ></i>
                  </Link>
                </div>

              </div>
            </div> )}

           

          </div>

        </div>
      </section>

    </main>

</>

}

export default Category