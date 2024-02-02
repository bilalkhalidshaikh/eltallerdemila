import Icons from "components/common/Icons";
import { useRouter } from "next/router";
import React from "react";
import { hero } from "../../../site.config";
import YouTube from "react-youtube";
import Vimeo from "@u-wave/react-vimeo";
import Link from "next/link";
import Slider from "react-slick";
// import advertise1 from "/assets/images/advertise/1.png";
// import advertise2 from "/assets/images/advertise/2.png";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

// const Advertise = () => {
//   return (
//     <div className="row">
//       <div className="col-lg-6">
//         <div className="advertise-item wow fadeInUp delay-0-2s">
//           <div className="content">
//             <h4>Become An Instructor?</h4>
//             <p>
//               Sit amet consectetur adipiscing sed eiusmod tempore dolore magna
//               suspendisse
//             </p>
//             <Link href="/contact">
//               <a className="theme-btn">
//                 Join with us <i className="fas fa-arrow-right" />
//               </a>
//             </Link>
//           </div>
//           <div className="image">
//             <img src={advertise1.src} alt="Advertise" />
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-6">
//         <div className="advertise-item bg-two wow fadeInUp delay-0-4s">
//           <div className="content">
//             <h4>Get Online Courses</h4>
//             <p>
//               Amet consectetur adipiscing sed eius tempore dolore magna suspens
//             </p>
//             <Link href="/contact">
//               <a className="theme-btn style-two">
//                 Join with us <i className="fas fa-arrow-right" />
//               </a>
//             </Link>
//           </div>
//           <div className="image">
//             <img src={advertise2.src} alt="Advertise" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const Counter = ({ end, decimals }) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <t data-from="0" data-to={end} ref={countUpRef}>
            count
          </t>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default function Hero() {
  const coachSlider = {
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
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const word = document.getElementById("search-box").value;
    router.push(`/${"search"}?word=${word}`);
  };

  return (
    <>
      {/* <section className="section pt-5 pb-0 mt-4">
      <div className="container-fluid mt-md-1 px-0 px-md-3">
        <div className="rounded bg-light py-5 px-3 px-sm-0 shadow-md">
          <div className="row">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 col-12">
                  <div className="title-heading mr-lg-4">
                    <h1 className="h2  mb-3">
                      {hero.mainTitle}  </h1>
                    <p className="para-desc text-muted">{hero.subTitle}</p>
                    <div className="subcribe-form mt-4 pt-2">
                      <form className="m-0" onSubmit={submitHandler}>
                        <div className="form-group">
                          <input
                            type="text"
                            id="search-box"
                            name="name"
                            className="text-dark rounded shadow-md pl-3"
                            placeholder={hero.searchPlaceholder}
                          />
                          <button type="submit" className="btn btn-primary">
                            <Icons
                              icon="search"
                              className="fa-x1"
                              style={{
                                fontSize: "16px",
                              }}
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div
                    className="video-container shadow-md"
                    style={{ height: "315px" }}
                  >
                    <Vimeo
                      height="420"
                      width="720"
                      showByline={false}
                      showPortrait={false}
                      controls={false}
                      video={hero.VimeoVideoId}
                      autoplay={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      {/* <section className="hero-section rel z-1 pt-150 rpt-135 pb-75 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content rpt-25 rmb-75">
                <span className="sub-title style-two mb-20 wow fadeInUp delay-0-2s">
                  Cursos &amp; Online
                </span>
                <h1 className="mb-20 wow fadeInUp delay-0-4s">
                Aprenda el arte de los globos.
                </h1>
                <p className="wow fadeInUp delay-0-6s">
                ¿Busca cursos de diseño de globos únicos? Mejora tus habilidades de diseño de globos con nosotros. Aprende de nuestras videoclases
                </p>
                <div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
                    <a className="theme-btn">
                    Consigue tu curso gratuito <i className="fas fa-arrow-right" />
                    </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-right-images text-lg-right wow fadeInUp delay-0-2s">
                <img src="assets/images/hero/hero.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <span className="bg-text">coach</span>
      </section> */}

      {/* Hero Section Start */}
      <section className="hero-section-three bg-lighter rel z-1 pt-80 rpt-150">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6 align-self-end">
              <div className="hero-three-image-part">
                <img src="assets/images/about/woman.png"
                //  style={{maxHeight:'46rem',height:'46rem',width:"46em"}} 
                 alt="Hero" />
                <div className="hero-chart wow fadeInUp delay-0-2s">
                  <img src="assets/images/hero/bal.jpg" alt="Chart" />
                  <h5>Resultados de éxito</h5>
                </div>
                <div className="hero-over-text">
                  <div className="about-image-over-item wow fadeInRight delay-0-2s">
                    <img src="assets/images/hero/b.png" alt="Icon" />
                    <h6>Asesora de experiencia</h6>
                  </div>
                  <div className="about-image-over-item wow fadeInLeft delay-0-2s">
                    <img src="assets/images/about/icon2.png" alt="Icon" />
                    <h5>Tutoriales en vídeo de calidad</h5>
                  </div>
                </div>
                <img
                  className="hero-circle"
                  src="assets/images/shapes/circle-dots-two.png"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="hero-content-three pt-10 pb-100 rpt-40">
                <span className="hero-sub-title mb-10 wow fadeInUp delay-0-2s">
                  <span>24+</span> estudiantes
                </span>
                <h1 className="mb-25 wow fadeInUp delay-0-4s">
                  {/* We’re Best <span>Online</span> Education Partners University
                  2022 */}
                 Aprenda el arte <span>de los globos.</span>
                </h1>
                <ul className="list-style-one wow fadeInUp delay-0-6s">
                  <li>Expertas Asesoras</li>
                  <li>5+ Cursos</li>
                </ul>
                <div className="hero-btns mt-10 wow fadeInUp delay-0-8s">
                  {/* <Link href="/contact"> */}
                    <a className="theme-btn mt-10 text-white">
                      Get started <i className="fas fa-arrow-right" />
                    </a>
                  {/* </Link> */}
                  {/* <Link href="/course-grid"> */}
                    <a className="theme-btn style-two text-black bg-white mt-10">
                     <span >our courses</span>  <i className="fas fa-arrow-right" />
                    </a>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="hero-rectangle"
          src="assets/images/shapes/rectangle-dots-two.png"
          alt="Shape"
        />
        <div className="hero-circles-one wow fadeInUpRight delay-0-4s" />
        <div className="hero-circles-two wow fadeInUpRight delay-0-2s" />
      </section>
      {/* Hero Section End */}
 
      {/* Features Section Start */}
      {/* <section className="features-section rel z-1 pt-80 pb-40 bg-[#00CC83] text-white" style={{backgroundColor:"#00CC83"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/features/icon1.png" alt="Icon" />
                </div>
                <div className="content">
                  <h4>Cursos en línea de expertas</h4>
                  <p>
                    Sit amet consectetur adipisc elit sed do eiusmod temporse
                    incididunt labore dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/features/icon2.png" alt="Icon" />
                </div>
                <div className="content">
                  <h4>USP 02 Alta calidad</h4>
                  <p>
                    Sit amet consectetur adipisc elit sed do eiusmod temporse
                    incididunt labore dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/features/icon1.png" alt="Icon" />
                </div>
                <div className="content">
                  <h4>Actualización de eventos y vídeos</h4>
                  <p>
                    Sit amet consectetur adipisc elit sed do eiusmod temporse
                    incididunt labore dolore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="rectangle-dots"
          src="assets/images/shapes/rectangle-dots.png"
          alt="Shape"
        />
        <img
          className="circle-dots"
          src="assets/images/shapes/circle-dots.png"
          alt="Shape"
        />
      </section> */}
      {/* Features Section End */}
      <br/>
      <br/>
         
     
    </>
  );
}
