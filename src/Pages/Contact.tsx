function Contact(){

return <>

<main className="contact-page">

  <section className="contact-hero">
    <div className="container text-center my-5">
      <span className="contact-label">CONTACT US</span>
      <h1>Get In Touch With Us</h1>
      <p>
        Have a question or need help? We'd love to hear from you.
        Send us a message and we'll get back to you soon.
      </p>
    </div>
  </section>


  <section className="contact-content">
    <div className="container">
      <div className="row g-5">

        <div className="col-lg-5">
          <div className="contact-info">
            <h2>Let's Talk</h2>
            <p className="info-description">
              Feel free to reach out to us. Our team is always ready
              to help you with your shopping experience.
            </p>

            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h5>Email Us</h5>
                <p>support@shoply.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h5>Call Us</h5>
                <p>+20 100 123 4567</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <h5>Our Location</h5>
                <p>Alexandria, Egypt</p>
              </div>
            </div>

            <div className="contact-socials">
              <h5>Follow Us</h5>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll be in touch.</p>

            <form className="contact-form">

              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                 />
                </div>

                <div className="col-12">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="What is this about?"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="contact-submit">
                    Send Message
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  </section>

 
  <section className="contact-faq">
    <div className="container">
      <div className="section-heading text-center">
        <span className="contact-label">FAQ</span>
        <h2>Frequently Asked Questions</h2>
        <p>Quick answers to some common questions.</p>
      </div>

      <div className="faq-list">

        <div className="faq-item">
          <h5>How can I track my order?</h5>
          <p>You can track your order from your account after logging in.</p>
        </div>

        <div className="faq-item">
          <h5>What payment methods do you accept?</h5>
          <p>We support different payment options for a smooth checkout experience.</p>
        </div>

        <div className="faq-item">
          <h5>How can I return a product?</h5>
          <p>Contact our support team and we'll guide you through the return process.</p>
        </div>

      </div>
    </div>
  </section>

</main>

</>

}
export default Contact