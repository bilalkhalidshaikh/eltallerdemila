import React from "react";
import SEO from "components/common/Seo";
import Hero from "components/home/Hero";
import Partners from "components/home/Partners";
import NewsLetter from "components/home/NewsLetter";
import PopularCourses from "components/home/PopularCourses";
import Invitation from "components/common/Invitation";
import Link from "next/link";
import Slider from "react-slick";


export default function CourseItem(){
    const coachSlider = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 400,
        autoplay: true,
        arrows: false,
        dots: false,
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
    return(
        <>
         {/* Coach Section Start */}
      <section className="coach-section-two bg-light-two rel z-1 pt-185 rpt-150 pb-130 rpb-100">
        <div className="container for-circle rpt-5">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title-three">
                Nuestro último <span>Cursos</span>
                </span>
                <h2>Navegador de cursos más recientes</h2>
              </div>
            </div>
          </div>
          <Slider {...coachSlider} className="coach-slider ">
            <div className="coach-item-two wow fadeInUp delay-0-2s p-4 ml-8">
              <div className="image">
                <img src="assets/images/coachs/28.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <a>
                  <span className="category">Ballon Design</span>
                </a>
                <h4>
                  <a >
                    Ballon Decoration Masterclass
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <img
                      src="assets/images/coachs/couse-author11.jpg"
                      alt="Author"
                    />
                    <span>
                      By <b>Bennie L.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>38 seats</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="coach-item-two wow fadeInUp delay-0-4s p-4 ml-8">
              <div className="image">
                <img src="assets/images/coachs/54.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <a>
                  <span className="category">Ballon Studies</span>
                </a>
                <h4>
                  <a>
                   Ballon Decoration at Event or Party 
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <img
                      src="assets/images/coachs/couse-author12.jpg"
                      alt="Author"
                    />
                    <span>
                      By <b>Michael R.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>30 seats</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="coach-item-two wow fadeInUp delay-0-6s p-4 ml-8">
              <div className="image">
                <img src="assets/images/coachs/28.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <a >
                  <span className="category">Ballon</span>
                </a>
                <h4>
                  <a >
                  Ballon Decoration Masterclass
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <img
                      src="assets/images/coachs/couse-author13.jpg"
                      alt="Author"
                    />
                    <span>
                      By <b>Nelson E.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>50 seats</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="coach-item-two wow fadeInUp delay-0-8s p-4 ml-8">
              <div className="image">
                <img src="assets/images/coachs/54.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <a>
                  <span className="category">Ballon Design</span>
                </a>
                <h4>
                  <a>
                  Ballon Decoration at Event or Party 
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <img
                      src="assets/images/coachs/couse-author11.jpg"
                      alt="Author"
                    />
                    <span>
                      By <b>Bennie L.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>38 seats</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="coach-item-two wow fadeInUp delay-0-2s p-4 ml-8">
              <div className="image">
                <img src="assets/images/coachs/28.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <a >
                  <span className="category">Ballon Studies</span>
                </a>
                <h4>
                  <a >
                  Ballon Decoration Masterclass
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <img
                      src="assets/images/coachs/couse-author12.jpg"
                      alt="Author"
                    />
                    <span>
                      By <b>Michael R.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>30 seats</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="coach-item-two wow fadeInUp delay-0-4s p-4 ml-8">
              <div className="image">
                <img src="assets/images/coachs/54.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <a >
                  <span className="category">Ballon</span>
                </a>
                <h4>
                  <a>
                  Ballon Decoration at Event or Party 
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <img
                      src="assets/images/coachs/couse-author13.jpg"
                      alt="Author"
                    />
                    <span>
                      By <b>Nelson E.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>50 seats</span>
                  </li>
                </ul>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Coach Section End */}
        </>
    )
}