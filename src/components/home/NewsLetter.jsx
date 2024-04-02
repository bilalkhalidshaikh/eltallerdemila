import Slider from "react-slick";
import Link from "next/link";

const Newsletters = () => {
    const index1EventWrap = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 400,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
       const index1Testimonial = {
  infinite: true,
  arrows: false,
  dots: true,
  fade: true,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  slidesToScroll: 1,
  slidesToShow: 1,
};
const testimonialthree = {
  infinite: true,
  arrows: false,
  dots: true,
  fade: true,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  slidesToScroll: 1,
  slidesToShow: 1,
};


    return (
        <>
           {/* Newsletter Section Start */}
      <section className="newsletter-section pb-130 rpb-100 wow fadeInUp delay-0-2s" id="news">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-video overlay">
                <img src="assets/images/video/11.jpg" alt="Video" />
                {/* <a
                //   href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-content bg-lighter">
                <div className="section-title mb-20">
                  <span className="sub-title mb-25">BOLETINES</span>
                  <h1>
                    <b>
                    Reciba todas nuestras notificaciones
                    </b>
                  </h1>
                </div>
                <p>
                Entra tu cuenta de correo y subscríbete para estar
informada(o) de todos nuestras futuras clases y proyectos. Actualizamos
esta information regularmente
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="newsletter-form mt-25"
                  action="#"
                >
                  <div className="newsletter-radios mb-25">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="hero-wekly"
                        name="example1"
                        defaultChecked=""
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="hero-wekly"
                      >
                        Regular Updates
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="hero-monthly"
                        name="example1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="hero-monthly"
                      >
                        Weekly Updates
                      </label>
                    </div>
                  </div>
                  <div className="newsletter-email">
                    <label htmlFor="email">
                      <i className="far fa-envelope" />
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Email Address"
                      required=""
                    />
                    <button type="submit" className="theme-btn">
                    <a href="mailto:Info@achrowebsolutions.com" style={{color:'white',display:'flex'}}>
                    Suscribir <i className="fas fa-arrow-right" />
                    </a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section End */}
      {/* Blog Section Start */}
      <section className="blog-section" id="blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-55">
                <span className="sub-title mb-20">Noticias &amp; Blog</span>
                <h1>
                  <b>
                  Lea alguna tienda sobre noticias y noticias Blog
                  </b>
                  </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              {/* <div className="blog-item big-item wow fadeInUp delay-0-2s"> */}
              <div className="blog-item  wow fadeInUp delay-0-2s">
                <div className="blog-image">
                  <img src="assets/images/blog/65.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>25</span> March
                  </span>
                  <div className="content">
                    <h4>
                      {/* <Link 
                      href="/"> */}
                    ¡Tú lo sueñas, nosotros lo diseñamos e instalamos! Desde guirnaldas de globos orgánicos, paredes de globos,
                      {/* </Link> */}
                    </h4>
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        {/* <Link href="/blog"> */}
                          By Camila
                          {/* </Link> */}
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        {/* <Link href="/blog"> */}
                          Comments (0)
                          {/* </Link> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="blog-image">
                  <img src="assets/images/blog/55.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>25</span> March
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        {/* <Link href="/blog"> */}
                          By Camila
                          {/* </Link> */}
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        {/* <Link href="/blog"> */}
                          Com (0)
                          {/* </Link> */}
                      </li>
                    </ul>
                    <h5>
                      {/* <Link href="/"> */}
                      Hemos simplificado su planificación
                      {/* </Link> */}
                    </h5>
                    <p>
                    Desde pequeña, siempre fui una
persona que se fijaba siempre en cada minimo detalle
                    </p>
                    {/* <Link href="/blog-details"> */}
                      <a className="read-more">
                      Leer más <i className="fas fa-arrow-right" />
                      </a>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="blog-item wow fadeInUp delay-0-6s">
                <div className="blog-image">
                  <img src="assets/images/blog/53.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <span className="date">
                    <span>03</span> April
                  </span>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user" />{" "}
                        {/* <Link href="/blog"> */}
                          By Camila
                          {/* </Link> */}
                      </li>
                      <li>
                        <i className="far fa-comments" />{" "}
                        {/* <Link href="/blog"> */}
                          Com (0)
                          {/* </Link> */}
                      </li>
                    </ul>
                    <h5>
                      {/* <Link href="/blog-details"> */}
                      Nuestros diseños con bombas de
helio, estan aqui para quedarse!
                      {/* </Link> */}
                    </h5>
                    <p>
                    Arreglos y Decoraciones con bombas de Helio se han
vuelto un exito total y son muy populares
                    </p>
                      <a className="read-more">
                      Leer más <i className="fas fa-arrow-right" />
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-more-btn pt-30 text-center">
            {/* <Link href="/blog"> */}
              <a className="theme-btn style-three">
              ver más noticias
               {/* <i className="fas fa-arrow-right" /> */}
              </a>
            {/* </Link> */}
          </div>
        </div>
      </section>
      {/* Blog Section End */}
          <br/>
             {/* Testimonial Section Start */}
      <section className="testimonial-three rel py-80">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="testimonial-three-content rel z-1 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title-three">
                  {/* Clientas Tes<span>timonials</span> */}
                  Testimonio de <span>clientes</span>
                  </span>
                  <h1>
                    <b>

                    La opinión de la gente sobre nuestros cursos
                    </b>
                    </h1>
                </div>
                <p>
                Dejanos tus comentarios y
cuentanos como te sentiste con nuestro curso una vez hayas terminado!
                </p>
                {/* <Link href="/about"> */}
                  <a className="read-more color-two mt-5">
                  Ver más
                  <i className="fas fa-arrow-right" />
                  </a>
                {/* </Link> */}
              </div>
            </div>
            <div className="col-lg-6">
              <Slider
                // {...testimonialthree}
                className="testimonial-three-wrap rel z-1 wow fadeInUp delay-0-4s"
              >
                <div className="testimonial-three-item">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/blank.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="quality-rating">
                      <h4>Good Quality</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <p>
                    El taller de
Camila es una exelente plataforma que ha hecho sonreir a muchas
personas! los cursos son muy faciles de aprender y ella los explica
perfectamente. He aprendido mucho con este primer curso y estoy
esperando por mas!
                    </p>
                    <h5>Andrea Tatiana Lopez</h5>
                    {/* <span className="designation">Business Manager</span> */}
                  </div>
                </div>
                <div className="testimonial-three-item">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/blank.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="quality-rating">
                      <h4>Good Quality</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <p>
                    El taller de
Camila es una exelente plataforma que ha hecho sonreir a muchas
personas! los cursos son muy faciles de aprender y ella los explica
perfectamente. He aprendido mucho con este primer curso y estoy
esperando por mas!
                    </p>
                    <h5>Andrea Tatiana Lopez</h5>
                    {/* <span className="designation">Business Manager</span> */}
                  </div>
                </div>
                <div className="testimonial-three-item">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/blank.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="quality-rating">
                      <h4>Good Quality</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <p>
                    El taller de
Camila es una exelente plataforma que ha hecho sonreir a muchas
personas! los cursos son muy faciles de aprender y ella los explica
perfectamente. He aprendido mucho con este primer curso y estoy
esperando por mas!
                    </p>
                    <h5>Andrea Tatiana Lopez</h5>
                    {/* <span className="designation">Business Manager</span> */}
                  </div>
                </div>
                {/* <div className="testimonial-three-item">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-three-author?.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="quality-rating">
                      <h4>Good Quality</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <p>
                      Doloremq udantium totam aperiam eaque quae abillo
                      inventore veritatis architecto beatae Sed ut perspiciatis
                      unde omniste natus sit voluptate accusantium
                    </p>
                    <h5>Robin I. Reed</h5>
                    <span className="designation">Business Manager</span>
                  </div>
                </div>
                <div className="testimonial-three-item">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-three-author?.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="quality-rating">
                      <h4>Good Quality</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <p>
                      Veritatised ut perspiciatis unde omniste natus sit
                      voluptate accusantium doloremq udantium totam aperiam
                      eaque quae abillo inventore architecto
                    </p>
                    <h5>Robert G. Brown</h5>
                    <span className="designation">Business Manager</span>
                  </div>
                </div> */}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section End */}
          <hr/>
          <br/>
      {/* Testimonials Section End */}
       {/* Instagram Section Start */}
       <div className="instagram-section pb-120 rpb-90">
        <div className="container-fluid">
          <div className="row small-gap justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-1s">
                <img
                  src="assets/images/instagram/5.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="https://www.instagram.com/eltallerdemila01" target="_blank">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/instagram/13.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="https://www.instagram.com/eltallerdemila01" target="_blank">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-3s">
                <img
                  src="assets/images/instagram/18.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="https://www.instagram.com/eltallerdemila01" target="_blank">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/instagram/11.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="https://www.instagram.com/eltallerdemila01" target="_blank">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-5s">
                <img
                  src="assets/images/instagram/45.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="https://www.instagram.com/eltallerdemila01" target="_blank">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/instagram/37.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="https://www.instagram.com/eltallerdemila01" target="_blank">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
        </>
    );
  };
  export default Newsletters;
  