function Footer(){

return <footer className="footer-section">

  <div className="container">

    <div className="row g-4">

      {/* Brand */}
      <div className="col-lg-4 col-md-6">

        <a href="/" className="footer-logo">
          Shoply<span>.</span>
        </a>

        <p className="footer-description">
          Your one-stop destination for quality products
          and amazing shopping experiences.
        </p>

        <div className="footer-social">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-twitter-x"></i></a>
          <a href="#"><i className="bi bi-youtube"></i></a>
        </div>

      </div>

      {/* Quick Links */}
      <div className="col-lg-2 col-md-6">

        <h5 className="footer-title">Quick Links</h5>

        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

      </div>

      {/* Customer Service */}
      <div className="col-lg-2 col-md-6">

        <h5 className="footer-title">Customer Service</h5>

        <ul className="footer-links">
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Returns & Refunds</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>

      </div>

      {/* Newsletter */}
      <div className="col-lg-4 col-md-6">

        <h5 className="footer-title">Join Our Newsletter</h5>

        <p className="footer-description">
          Subscribe to get special offers and updates.
        </p>

        <form className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      </div>

    </div>

    <hr className="footer-divider" />

    <div className="footer-bottom">

      <p>© 2026 Shoply. All rights reserved.</p>

      <div className="payment-methods">
        <i className="bi bi-credit-card"></i>
        <i className="bi bi-paypal"></i>
        <i className="bi bi-wallet2"></i>
      </div>

    </div>

  </div>

</footer>

}

export default Footer