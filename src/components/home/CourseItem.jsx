import React,{useRef} from "react";
import SEO from "components/common/Seo";
import Hero from "components/home/Hero";
import Partners from "components/home/Partners";
import NewsLetter from "components/home/NewsLetter";
import PopularCourses from "components/home/PopularCourses";
import Invitation from "components/common/Invitation";
import Link from "next/link";
import Slider from "react-slick";
import ReactPlayer from "react-player";


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
const videoUrl =
"https://eltallerdemila.com/wp-content/uploads/2023/05/WhatsApp-Video-2024-02-13-at-22.57.46_f3bbf5fc-1.mp4";
const videoRef = useRef(null);

    return(
        <>
         {/* Coach Section Start */}
      <section className="coach-section-two bg-white rel z-1 pt-185 rpt-150 pb-130 rpb-100" id="course">
        <div className="container for-circle rpt-5">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title-three" style={{fontSize:'20px'}}>
                Nuestro último <span>Cursos</span>
                </span>
                <h1 style={{fontWeight:"bold"}}>Navegador de cursos más recientes</h1>
              </div>
            </div>
          </div>
          <Slider {...coachSlider} className="coach-slider ">
            
            <div className="coach-item-two wow fadeInUp delay-0-2s p-4 ml-8">
              {/* <div className="image">
                <img src="assets/images/coachs/28.jpg" alt="Course" />
              </div> */}
               <div className=" video-container image heightSet" style={{height:"250px"}}>
          <video
            className="course-video "
            src={"https://eltallerdemila.com/wp-content/uploads/2023/05/WhatsApp-Video-2024-02-13-at-22.57.46_f3bbf5fc-1.mp4"}
            onMouseOver={event => event.currentTarget.play()}
            onMouseOut={event => event.currentTarget.pause()}
            onFocus={event => event.currentTarget.play()}
            onBlur={event => event.currentTarget.pause()}
            loop
            // muted
            preload="none" // This helps to not load the video until needed
            nofullscreen
            poster="assets/images/coachs/79.jpg"
            // width={"400px"}
            // height={"100px"}
            style={{borderRadius:'25px '}}
          >
            Your browser does not support the video tag.
          </video>
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
                <Link href={"https://eltallerdemila.com/courses/balloon-decoration-masterclass/"}>
                  {/* <a > */}
                  Mini arco de globos orgánico
                  {/* </a> */}
                  </Link>
                </h4>
                <ul className="coach-footer">
                  <li>
                  <Link href={"https://eltallerdemila.com/courses/balloon-decoration-masterclass/"}>
                    <img
                      src="assets/images/testimonials/blank.png"
                      alt="Author"
                    />
                    </Link>
                    <span>
                      By <b>Camila's.</b>
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
                   Coming soon..
                  </a>
                </h4>
                <ul className="coach-footer">
                  <li>
                    <img
                      src="assets/images/testimonials/blank.png"
                      alt="Author"
                    />
                    <span>
                      By <b>Milas.</b>
                    </span>
                  </li>
                  <li>
                    <i className="far fa-user" />
                    <span>30 seats</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="coach-item-two wow fadeInUp delay-0-6s p-4 ml-8">
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
            </div> */}
          </Slider>
        </div>
      </section>
      {/* Coach Section End */}
        </>
    )
}



