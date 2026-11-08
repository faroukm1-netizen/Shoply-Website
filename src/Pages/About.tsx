function About(){


return   <main className="about-page">

   
    <section className="about-hero">
        <div className="container my-5">
            <div className="row align-items-center g-5">

                <div className="col-lg-6">
                    <span className="about-label">ABOUT SHOPLY</span>

                    <h1>
                        Shopping Made
                        <span>Simple & Better.</span>
                    </h1>

                    <p>
                        We believe shopping should be easy, enjoyable,
                        and accessible to everyone. Discover products
                        you love with an experience designed around you.
                    </p>

                    <a href="/shop" className="about-btn">
                        Explore Products
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>

                <div className="col-lg-6">
                    <div className="about-hero-image">
                        <img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1000"
                            alt="Online Shopping" />
                    </div>
                </div>

            </div>
        </div>
    </section>

   
    <section className="about-story">
        <div className="container">
            <div className="row align-items-center g-5">

                <div className="col-lg-6">
                    <div className="story-image">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900"
                            alt="Our Story" />
                    </div>
                </div>

                <div className="col-lg-6">
                    <span className="about-label">OUR STORY</span>

                    <h2>
                        More Than Just Shopping.
                    </h2>

                    <p>
                        Shoply was created with one simple idea:
                        making online shopping a better experience
                        for everyone.
                    </p>

                    <p>
                        We bring together a wide range of products,
                        affordable prices, and a simple shopping
                        experience to help you find exactly what you need.
                    </p>
                </div>

            </div>
        </div>
    </section>

    <section className="about-values">
        <div className="container">

            <div className="section-heading text-center">
                <span className="about-label">WHAT DRIVES US</span>
                <h2>Our Mission & Vision</h2>
                <p>Everything we do starts with our customers.</p>
            </div>

            <div className="row g-4">

                <div className="col-md-6">
                    <div className="value-card">
                        <div className="value-icon">
                            <i className="bi bi-bullseye"></i>
                        </div>

                        <h3>Our Mission</h3>

                        <p>
                            To provide a convenient and enjoyable
                            shopping experience with quality products
                            and great value.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="value-card">
                        <div className="value-icon">
                            <i className="bi bi-eye"></i>
                        </div>

                        <h3>Our Vision</h3>

                        <p>
                            To become a trusted shopping destination
                            where customers can discover everything
                            they love.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section className="about-why">
        <div className="container">

            <div className="section-heading text-center">
                <span className="about-label">WHY SHOPLY</span>
                <h2>Why Choose Us?</h2>
                <p>We make every shopping experience count.</p>
            </div>

            <div className="row g-4">

                <div className="col-6 col-lg-3">
                    <div className="why-card">
                        <i className="bi bi-truck"></i>
                        <h4>Fast Delivery</h4>
                        <p>Get your orders delivered quickly.</p>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="why-card">
                        <i className="bi bi-shield-check"></i>
                        <h4>Secure Shopping</h4>
                        <p>Shop with confidence and peace of mind.</p>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="why-card">
                        <i className="bi bi-tags"></i>
                        <h4>Best Prices</h4>
                        <p>Find great products at great prices.</p>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="why-card">
                        <i className="bi bi-headset"></i>
                        <h4>Customer Support</h4>
                        <p>We're always here to help you.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section className="about-cta">
        <div className="container text-center">
            <h2>Ready to Start Shopping?</h2>

            <p>
                Discover our collections and find something you'll love.
            </p>

            <a href="/shop" className="about-btn">
                Start Shopping
                <i className="bi bi-arrow-right"></i>
            </a>
        </div>
    </section>

</main>



}
export default About