function Footer() {
    return (
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 about-me">
              <h5>About Me</h5>
              <p>
                Hi, I'm Sajith Maniventhan, a passionate young student with aspirations
                in engineering, mathematics, and general sciences. If you wish to contact me
                checkout the contact page, or through social media.
              </p>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4 text-center">
              <h5>Look Around!</h5>
              <ul className="list-unstyled">
                <li><a href="#about" className="text-light">About</a></li>
                <li><a href="#projects" className="text-light">Projects</a></li>
                <li><a href="#contact" className="text-light">Contact</a></li>
              </ul>
            </div>
  
            <div className="col-lg-4 col-md-12 mb-4">
              <h5>Follow Me</h5>
              <div className="d-flex">
                <a href="https://www.instagram.com" className="btn btn-outline-light me-2">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" className="btn btn-outline-light me-2">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://www.github.com" className="btn btn-outline-light me-2">
                  <i className="bi bi-github"></i>
                </a>
                <a href="mailto:email@example.com" className="btn btn-outline-light me-2">
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="mb-0">&copy; 2024 Sajith Maniventhan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  