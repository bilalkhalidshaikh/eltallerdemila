import Icons from "components/common/Icons";
import Link from "next/link";
import React, { Fragment } from "react";
import { socialIcons, footer, siteMetadata } from "../../../site.config";

export default function Footer({ litle }) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const FollowIcon = () => (
    <Fragment>
      {/* <Link href="/contact"> */}
      <a>
        <i className="fab fa-facebook-f" />
      </a>
      {/* </Link> */}
      {/* <Link href="/contact"> */}
      <a>
        <i className="fab fa-twitter" />
      </a>
      {/* </Link> */}
      {/* <Link href="/contact"> */}
      <a>
        <i className="fab fa-linkedin-in" />
      </a>
      {/* </Link> */}
      {/* <Link href="/contact"> */}
      <a>
        <i className="fab fa-youtube" />
      </a>
      {/* </Link> */}
    </Fragment>
  );
  const Courses = () => (
    <Fragment>
      <li>
        {/* <Link href="/course-details"> */}
        Ballon Coach
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/course-details"> */}
        Ballon Event
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/course-details"> */}
        Ballon Art
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/course-details"> */}
        Ballon Design
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/course-details"> */}
        Ballon Fun
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/course-details"> */}
        Ballon Party
        {/* </Link> */}
      </li>
    </Fragment>
  );
  const Resources = () => (
    <Fragment>
      <li>
        {/* <Link href="/contact"> */}
        Community
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/contact"> */}
        Support
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/contact"> */}
        Video Guides
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/contact"> */}
        Documentation
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/contact"> */}
        Security
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/contact"> */}
        Courses
        {/* </Link> */}
      </li>
    </Fragment>
  );
  const FooterBottom = () => (
    <Fragment>
      <li>
        {/* <Link href="/faqs"> */}
        Faqs
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/contact"> */}
        Links
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/about"> */}
        About
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/contact"> */}
        Payments
        {/* </Link> */}
      </li>
    </Fragment>
  );
  const CopyRight = () => (
    <p>
      © {new Date().getFullYear()} <Link href="/"></Link> All rights reserved.
    </p>
  );
  return (
    <>
      {!litle && (
        // <footer className="footer">
        //   <div className="container">
        //     <div className="row">
        //       <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
        //         <div className="logo">
        //           <Link href="/">
        //             <h3
        //               className="m-0"
        //               style={{
        //                 color: "#fff",
        //               }}
        //             >
        //               <i
        //                 style={{
        //                   boderRadius: "50%",
        //                   color: "#fff",
        //                 }}
        //               >
        //                 <Icons
        //                   icon="code"
        //                   className="mr-2 bg-primary p-1 rounded "
        //                 />
        //               </i>
        //               {siteMetadata.title}
        //             </h3>
        //           </Link>
        //         </div>

        //         <p className="mt-4">{footer.aboutText}</p>
        //         <ul className="list-unstyled  mb-0 mt-4">
        //           {socialIcons.map((icon, index) => (
        //             <li className="list-inline-item" key={index}>
        //               <a href="" className="text-foot">
        //                 <Icons className="fa-1x mx-2" icon={icon.icon} />
        //               </a>
        //             </li>
        //           ))}
        //         </ul>
        //       </div>

        //       <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-sm-0">
        //         <h4 className="text-light footer-head">{footer.LinksTitle}</h4>
        //         <ul className="list-unstyled footer-list mt-4">
        //           {footer.links.map((link, index) => {
        //             return (
        //               <li key={index}>
        //                 <a href={link.url} className="text-foot">
        //                   <Icons icon="dot" className="mr-1" />
        //                   {link.title}
        //                 </a>
        //               </li>
        //             );
        //           })}
        //         </ul>
        //       </div>

        //       <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-sm-0">
        //         <h4 className="text-light footer-head">
        //           {footer.newsLetterTitle}
        //         </h4>
        //         <p className="mt-4">{footer.newsLetterText}</p>
        //         <form>
        //           <div className="row">
        //             <div className="col-lg-12">
        //               <div className="foot-subscribe form-group position-relative">
        //                 <i
        //                   data-feather="mail"
        //                   className="fea icon-sm icons"
        //                 ></i>
        //                 <input
        //                   type="email"
        //                   name="email"
        //                   id="emailsubscribe"
        //                   className="form-control rounded"
        //                   placeholder="Your email:"
        //                   required
        //                 />
        //               </div>
        //             </div>
        //             <div className="col-lg-12">
        //               <input
        //                 type="submit"
        //                 id="submitsubscribe"
        //                 name="send"
        //                 className="btn btn-soft-primary btn-block"
        //                 value="Subscribe"
        //               />
        //             </div>
        //           </div>
        //         </form>
        //       </div>
        //     </div>
        //   </div>
        // </footer>
        <footer
          className="main-footer"
          style={{ backgroundColor: "#265b3ad0" }}
        >
          <div className="container">
            <div className="row justify-content-between text-white pt-65">
              <div className="col-lg-3 col-sm-4">
                <div className="footer-widget about-widget">
                  <h5 className="footer-title">About Us</h5>
                  <p>
                    Sit amet consectetur adipiscin seeiusmod tempor incididunt
                    ut dolore magna aliqu asusp disse ultrices gravida commodo
                  </p>
                  <h5 className="pt-5">Follow Us</h5>
                  <div className="social-style-one">
                    <FollowIcon />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="footer-widget menu-widget">
                  <h5 className="footer-title">Courses</h5>
                  <ul>
                    <Courses />
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="footer-widget menu-widget">
                  <h5 className="footer-title">Resources</h5>
                  <ul>
                    <Resources />
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="footer-widget contact-info-widget">
                      <h5 className="footer-title">Get In Touch</h5>
                      <ul>
                        <li>
                          <i className="fas fa-map-marker-alt" /> 55 Main
                          Street, 2nd Block, Florida
                        </li>
                        <li>
                          <i className="far fa-envelope" />{" "}
                          <a href="mailto:support@gmail.com">
                            info@eltallerdemila.com
                          </a>
                        </li>
                        <li>
                          <i className="fas fa-phone" />{" "}
                          <a href="callto:+0123456789">+012 (000) 00 00</a>
                        </li>
                        <li>
                          <i className="far fa-clock" /> Sunday - Friday,
                          <br /> 08 am - 05 pm
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="footer-widget newsletter-widget">
                      <h5 className="footer-title">Newsletter</h5>
                      <form onSubmit={(e) => e.preventDefault()} action="#">
                        <h6>Every Single Updates and Notifications</h6>
                        <div className="email-input">
                          <label htmlFor="footer-newsletter">
                            <i className="far fa-envelope" />
                          </label>
                          <input
                            type="email"
                            id="footer-newsletter"
                            placeholder="Enter Email"
                            required=""
                          />
                        </div>
                        <button className="theme-btn style-two" type="submit">
                          sign up <i className="fas fa-arrow-right" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="copyright-area footer-bar footer text-white rel"
            style={{
              background: "#4E795E",
              borderBottom: ".1px solid #ffffff77",
              borderTop: ".1px solid #ffffff77",
            }}
          >
            <div className="container">
              <div className="copyright-inner">
                <CopyRight />
                <ul className="footer-menu">
                  <FooterBottom />
                </ul>
              </div>
            </div>
            <button
              style={{ display: "inline-block", border: "none" }}
              onClick={() => scrollTop()}
              className="scroll-top scroll-to-target"
              data-target="html"
            >
              {/* <span className="fas fa-angle-double-up" /> */}
              <img
                src="assets/images/logo-m.png"
                className="avatar logo"
                alt=""
                style={{ height: "auto", width: "auto" }}
              />
            </button>
          </div>
        </footer>
      )}
      <footer
        className="footer footer-bar py-3 "
        style={{ background: "#4E795E", border: "none" }}
      >
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="text-sm-center text-white">
                <small className={litle ? "mb-0 text-center" : "mb-0"}>
                  ©{new Date().getFullYear()} eltallerdemila.com
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
