import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Category from "./Pages/Categories"
import CategoryProducts from "./Pages/CategoryProducts"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Search from "./Pages/SearchPage"


function ApiRouter(){

return  <Routes>

<Route index element={<Home />} />
<Route path="Shop" element={<Shop />} />
<Route path="Category" element={<Category />} />
<Route path="/category/:slug" element={<CategoryProducts />} />
<Route path="/About" element={<About />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/Search" element={<Search />} />

</Routes>

}

export default ApiRouter