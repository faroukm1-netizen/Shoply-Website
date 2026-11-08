import { NavLink } from "react-router"

function Navbar(){


return   <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
  <div className="container">

   
    <a className="navbar-brand fw-bold fs-3" href="#">
      Shop<span className="text-primary">ly.</span>
    </a>

   
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#shoplyNavbar"
      aria-controls="shoplyNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

  
    <div className="collapse navbar-collapse" id="shoplyNavbar">

    
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">

        <li className="nav-item">
          <NavLink className="nav-link fw-semibold" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Shop">Shop</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Category">Categories</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>

      </ul>

   
      <div className="navbar-actions d-flex align-items-center gap-3">

        <a href="/Search" className="nav-icon">
          <i className="bi bi-search"></i>
        </a>

        <a href="#" className="nav-icon position-relative">
          <i className="bi bi-heart"></i>
          <span className="icon-badge">2</span>
        </a>

        <a href="#" className="nav-icon position-relative">
          <i className="bi bi-bag"></i>
          <span className="icon-badge">3</span>
        </a>

        <a href="/Contact" className="btn btn-primary rounded-pill px-4 ms-4">
          Login
        </a>

      </div>

    </div>
  </div>
</nav>




}

export default Navbar