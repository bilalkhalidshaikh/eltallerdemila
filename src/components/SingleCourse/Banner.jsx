import React,{useState,useEffect} from "react";
import { Button, CardImg } from "reactstrap";
import _ from "lodash";
import Link from "next/link";
import PaymentButton from "./Payment/addPaymentReport/PaymentButton";

import PreviewButton from "./Payment/previewPaymentReport/PreviewButton";
import Icons from "components/common/Icons";
import { getShortLink } from "utils/courses";
import { singleCourse } from "../../../site.config";

function Banner({ course, authors, paymentReports, items }) {
  let currentReport = null;
  // if (paymentReports) {
  //   currentReport = paymentReports
  //     .filter((report) => {
  //       return report.report_subject.tipe === "course";
  //     })
  //     .find((report, index) => {
  //       return course?._id === report.report_subject._id;
  //     });
  // }

  console.log("banner",authors)
  const [authorData, setAuthorData] = useState(null);
  useEffect(() => {
    if (authors && course) {
      const author = authors.find((author) => author?.id === course?.course_author_id);
      setAuthorData(author);
      console.log("author id",author)
    }
  }, [authors, course]);

  const pic_url = authorData?.user_pic || "/img/noPic.png";


//   <Link href={`/user?id=${author?.id}`}>
//   <div className="teacher d-flex align-items-center px-2">
//     <img
//       alt={author?.name}
//       className="avatar avatar-md-sm rounded-circle shadow"
//       src={pic_url}
//     />
//     <div className="ml-2">
//       {/* <h6
//         className="mb-0 text-shadow"
//         style={{ color: "#fff" }}
//       >{`${author?.user_name}`}</h6> */}
//       <h6 className="mb-0 text-shadow" style={{ color: "#fff" }}>{author?.user_name || "N/A"}</h6>
//       {/* <p
//         className="small my-0 text-muted"
//         style={{ color: "#fff" }}
//       >
//         {author?.short_description || ""}
//       </p> */}
//       <p className="small my-0 text-muted" style={{ color: "#fff" }}>{author?.short_description || "N/A"}</p>
//     </div>
//   </div>
// </Link>

  return (
    <section
      className="px-0 py-5 m-0"
      style={{
        backgroundColor: "#4E795E",
        color: "whi_te",
      }}
    >
      <div className="container mt-5">
        <div className="row pt-5 d-flex" style={{ zIndex: 1 }}>
          <div className="col-12 col-md-6">
            <div className="shape-before">
              <img
                src={"/images/shapes/shape1.png"}
                className="img-fluid shape-img"
                alt=""
                style={{ zIndex: 0 }}
              />
              <CardImg
                className="shadow-lg"
                style={{
                  position: "relative",
                  boxShadow: "0 2px 55px rgba(47,85,212,0.3) !important",
                }}
                src={course?.course_pic_url}
              ></CardImg>
            </div>
          </div>
          <div className="col-12 col-md-6 pl-lg-4 pr-lg-3">
            <div className="title-heading">
              <h1
                className="h2 my-4 mt-md-0 text-shadow"
                style={{ color: "#fff" }}
              >
                {_.upperFirst(course?.course_title)}
              </h1>
              <p
                className="mb-4 mr-5"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ color: "#fff" }}
              >
                {_.upperFirst(course?.course_description)}
              </p>
            </div>
           

            {/* <Link href={`/user?id=${authorData?.id}`}>
        <div className="teacher d-flex align-items-center px-2">
          <img
            alt={authorData?.name}
            className="avatar avatar-md-sm rounded-circle shadow"
            src={pic_url}
          />
          <div className="ml-2">
            <h6 className="mb-0 text-shadow" style={{ color: "#fff" }}>{authorData?.user_name || "N/A"}</h6>
            <p className="small my-0 text-muted" style={{ color: "#fff" }}>{authorData?.short_description || "N/A"}</p>
          </div>
        </div>
      </Link> */}
      {authorData && (
  <Link href={`/user?id=${authorData?.id}`}>
    <div className="teacher d-flex align-items-center px-2">
      <img
        alt={authorData?.name}
        className="avatar avatar-md-sm rounded-circle shadow"
        src={pic_url}
      />
      <div className="ml-2">
        <h6 className="mb-0 text-shadow" style={{ color: "#fff" }}>{authorData?.user_name || "N/A"}</h6>
        <p className="small my-0 text-muted" style={{ color: "#fff" }}>{authorData?.short_description || "N/A"}</p>
      </div>
    </div>
  </Link>
)}
            {items[0] &&
              (course?.course_price > 0 ? (
                !currentReport ? (
                  <PaymentButton course={course} author={author} />
                ) : (
                  <PreviewButton
                    course={course}
                    author={author}
                    currentReport={currentReport}
                  />
                )
              ) : (
                <div className="mt-4">
                  <Link
                    href={
                      "/" +
                      course?.course_short_link +
                      "/" +
                      getShortLink(items[0].item_title)
                    }
                  >
                    <p
                      className="btn btn-primary w-100 heading"
                      style={{
                        fontSize: 25,
                      }}
                    >
                      {/* {singlecourse.buttonStartText} */}
                      Empezar
                      <Icons icon="arrowRight" className="ml-2 arrow1" />
                    </p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
