import React, { Component, Fragment, useState, useRef } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
export default function Partners() {
  const Index1WorkStepSliderprops = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
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

  return (
    <>
      <div>
        {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/amazon.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/google.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/lenovo.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/paypal.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/shopify.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>

          <div className="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src={require("../../assets/images/client/spotify.svg")}
              className="avatar avatar-ex-sm"
              alt=""
            />
          </div>
        </div>
      </div> */}

        {/* <section className="about-section pt-130 rpt-100 container">
      <div className="row justify-content-between align-items-center pb-30 wow fadeInUp delay-0-2s p-24" style={{padding:'24px !important'}}>
        <div className="col-xl-7 col-lg-8">
          <div className="section-title">
            <span className="sub-title mb-15">How It Works</span>
            <h2>Very Simple Steps to Success Golas</h2>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="slider-arrow-btns text-lg-right mt-10">
            <button onClick={previous} className="work-prev">
              <i className="fas fa-angle-left" />
            </button>
            <button onClick={next} className="work-next">
              <i className="fas fa-angle-right" />
            </button>
          </div>
        </div>
      </div>
      <Slider
        {...Index1WorkStepSliderprops}
        ref={sliderRef}
        className="work-step-wrap wow fadeInUp delay-0-4s"
      >
          <div className="work-step-item">
            <span className="number">01</span>
            <div className="content">
              <h4>Transformation Completed</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
          <div className="work-step-item">
            <span className="number">02</span>
            <div className="content">
              <h4>Schedule a Meeting</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
          <div className="work-step-item">
            <span className="number">03</span>
            <div className="content">
              <h4>Make a Decision</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
        </Slider>
</section> */}
        <section
          className="why-choose-section pt-120 rpt-90 pb-130 rpb-100"
          id="why"
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-25">
                    <span className="sub-title-three">
                      {/* Why Ch<span>oose Us</span> */}
                      Aprende con <span>El Taller de Mila</span>
                    </span>
                    {/* <h1 style={{fontSize:'32px'}}><b>Nuestro viaje de decoración con globos</b></h1> */}
                    <h1 style={{ fontSize: "32px" }}>
                      <b>Quien es Mila?</b>
                    </h1>
                  </div>
                  <p>
                    "Hola! Mi nombre es Camila Victoria Aponte, soy colombiana y
                    en mi país mi profesión es abogada, especializada en
                    derechos humanos. Mi oficio es artesana y hoy puedo decir
                    que amo lo que hago y eso me hace feliz. El nombre "Mila"
                    surgió porque mi hermano menor, cuando era pequeño, no podía
                    decir Camila y me decía "mila". El taller de Mila nació
                    durante la pandemia. En este oficio, me considero una
                    artesana y siento que el espacio donde hago mis diseños es
                    un taller, es mi lugar feliz. Cuando decidí hacer mis
                    diseños, pensé en lo que a mí me gustaría darle a mis seres
                    queridos y lo que yo quisiera recibir: algo diferente, hecho
                    exclusivamente para mí y elegante. Y ese es el objetivo de
                    El Taller de Mila, generar emociones y construir recuerdos.
                    ¡Porque el regalo perfecto sí existe y nosotros lo hacemos
                    exclusivamente para ti!"
                  </p>
                  <ul
                    className="list-style-four pt-5 pb-35"
                    style={{ marginTop: "-18px" }}
                  >
                    {/* <li>Mejor Instructor &amp; Mejores programas</li> */}
                    <li>Mejor instructora Y Mejores clases y programas.</li>
                    {/* <li>Grupo 100% certificado ISO</li>
                    <li>Premios Mejores Resultados</li> */}
                  </ul>
                  {/* <Link href="/about"> */}
                  <a className="theme-btn my-15 text-white" href="#learn">
                    Aprende más <i className="fas fa-arrow-right" />
                  </a>
                  {/* </Link> */}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="why-choose-images mt-10 wow fadeInUp delay-0-4s">
                  <img
                    src="assets/images/why-choose/icon.png"
                    alt="Circle"
                    className="circle"
                  />
                  <img
                    src="assets/images/why-choose/71.jpg"
                    alt="Why Choose"
                    className="why-choose-one"
                    // style={{maxHeight:'20rem'}}
                  />
                  <img
                    src="assets/images/why-choose/29.jpg"
                    alt="Why Choose"
                    className="why-choose-two"
                  />
                  <img
                    src="assets/images/why-choose/42.jpg"
                    alt="Why Choose"
                    className="why-choose-three"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/* Next About Sec */}
        <section className="about-section-two pb-120 rpb-95" id="learn">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-two-left rmb-75 wow fadeInLeft delay-0-2s">
                  <div className="about-two-images">
                    <img src="assets/images/about/28.jpg" alt="About" />
                    <img src="assets/images/about/78.jpg" alt="About" />
                    {/* <img src="https://imgur.com/rnrU4nC" alt="About" />
                  <img src="https://imgur.com/pWyVQyI" alt="About" /> */}
                  </div>
                  <div className="about-image-over">
                    <div className="about-image-over-item wow fadeInRight delay-0-2s">
                      <img src="assets/images/hero/b.png" alt="Icon" />
                      <h5>Asesora de experiencia</h5>
                    </div>
                    <div className="about-image-over-item">
                      <img src="assets/images/about/icon2.png" alt="Icon" />
                      <h5>Tutoriales en vídeo de calidad</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content-two wow fadeInRight delay-0-2s">
                  <div className="section-title mb-30">
                    {/* <span className="sub-title-two">Aprende nosotras</span> */}
                    <span className="sub-title-two">
                      Aprende con El Taller de Mila
                    </span>
                    <h1>
                      <b>Experiencia en el centro de aprendizaje en línea</b>
                    </h1>
                  </div>
                  <p>
                    Camila es una verdadera maestra en su oficio, con años de
                    experiencia y un talento innato para enseñar de manera clara
                    y efectiva. Además, ofrece una amplia variedad de recursos,
                    desde videos tutoriales hasta guías detalladas, para que
                    puedas aprender a tu propio ritmo y según tus necesidades.
                  </p>
                  <div className="about-btns">
                    {/* <Link href="/about"> */}
                    <a className="theme-btn my-15 text-white" href="#about">
                      Aprende más <i className="fas fa-arrow-right" />
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/faqs"> */}
                    <a
                      className="read-more text-dark text-decoration-none"
                      href="#about"
                    >
                      Cómo funciona <i className="fas fa-arrow-right" />
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className="counter-wrap">
                    <div className="success-item">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={24}
                      >
                        <Counter end={24} />
                      </span>
                      <span>Enrolled Learner</span>
                    </div>
                    <div className="success-item">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop="2.36"
                      >
                        <Counter end={2.36} />
                      </span>
                      <span>Finished Session</span>
                    </div>
                    <div className="success-item">
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop={99}
                      >
                        <Counter end={99} />
                      </span>
                      <span>Saticfaction Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Next About Sec */}
        {/*  */}
        {/* Free Tutorials Section */}
        <section className="about-section pt-10 rpt-80" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="about-content rel z-2 pb-115 rpb-85 wow fadeInRight delay-0-2s">
                  <div className="section-title mb-40">
                    <span
                      className="sub-title mb-25 pt-10 py-10"
                      style={{ fontSize: "15px", fontWeight: "12px" }}
                    >
                      {/* Sobre nosotras */}
                      Tutoriales Gratis!
                    </span>
                    <h1>
                      {" "}
                      {/* <b>Proporcionamos Life Coach de asesores expertos</b> */}
                      {/* <b>Clases Personalisadas con El Taller de Mila</b> */}
                      <b>Tutoriales Gratis con El Taller de Mila</b>
                    </h1>
                  </div>
                  {/* <div className ="about-features">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="feature-item">
                          <div className="icon">
                            <i className="fas fa-check" />
                          </div>
                          <div className="content">
                            <h5>Curso por Internet</h5>
                            <p>
                            Aprende muy
facil con nuestros videos y pon manos a la obra!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="feature-item">
                          <div className="icon">
                            <i className="fas fa-check" />
                          </div>
                          <div className="content">
                            <h5>Mentes creativas</h5>
                            <p>
                            Creaciones
innovadoras en cada clase
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="feature-item">
                          <div className="icon">
                            <i className="fas fa-check" />
                          </div>
                          <div className="content">
                            <h5>Tutoriales en vídeo</h5>
                            <p>
                            Videos
creados paso a paso muy faciles de seguir
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="feature-item">
                          <div className="icon">
                            <i className="fas fa-check" />
                          </div>
                          <div className="content">
                            <h5>Tutoría profesional</h5>
                            <p>
                            Camila es
una diseñadora profesional de globos con diplomado del Instituto
Decolovers, avalado por la
Universidad de la Florida.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                 <div className="responsive-iframe">
  <div
    style={{ padding: "0 10 0 0", position: "relative",marginTop:'-120px' }}
    className="responsive-iframe-inner"
  >
    <iframe
      src="https://player.vimeo.com/video/956008310?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      width="340px"
      height="520"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
      title="Tutoriales Gratis!"
      allowFullScreen
      className="iframe"
    ></iframe>
  </div>
</div>

                  <div className="about-btns">
                    {/* <Link href="/about"> */}
                    <a
                      className="theme-btn style-two my-15 text-white"
                      href="#blog"
                    >
                      Conozca más nosotros
                      <i className="fas fa-arrow-right" />
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/faqs"> */}
                    <a
                      className="read-more text-dark text-decoration-none"
                      href="#news"
                    >
                      Cómo funciona <i className="fas fa-arrow-right" />
                    </a>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-5 align-self-end">
                <div className="about-man rmb-75 wow fadeInLeft delay-0-2s">
                  <img src="assets/images/hero/67.jpg" alt="Woman" />
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* Free Tutorials Section */}
        {/* About Section Start */}
        <section className="about-section pt-60 rpt-100" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="about-content rel z-2 pb-115 rpb-85 wow fadeInRight delay-0-2s">
                  <div className="section-title mb-40">
                    <span
                      className="sub-title mb-25 pt-10 py-10"
                      style={{ fontSize: "15px", fontWeight: "12px" }}
                    >
                      {/* Sobre nosotras */}
                      Aprende mucho mas!
                    </span>
                    <h1>
                      {" "}
                      {/* <b>Proporcionamos Life Coach de asesores expertos</b> */}
                      {/* <b>Clases Personalisadas con El Taller de Mila</b> */}
                      <b>Clases Personalizadas con El Taller de Mila</b>
                    </h1>
                  </div>
                  <div className="about-features">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="feature-item">
                          <div className="icon">
                            <i className="fas fa-check" />
                          </div>
                          <div className="content">
                            <h5>Curso por Internet</h5>
                            <p>
                              Aprende muy facil con nuestros videos y pon manos
                              a la obra!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="feature-item">
                          <div className="icon">
                            <i className="fas fa-check" />
                          </div>
                          <div className="content">
                            <h5>Mentes creativas</h5>
                            <p>Creaciones innovadoras en cada clase</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="feature-item">
                          <div className="icon">
                            <i className="fas fa-check" />
                          </div>
                          <div className="content">
                            <h5>Tutoriales en vídeo</h5>
                            <p>
                              Videos creados paso a paso muy faciles de seguir
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="feature-item">
                          <div className="icon">
                            <i className="fas fa-check" />
                          </div>
                          <div className="content">
                            <h5>Tutoría profesional</h5>
                            <p>
                              Camila es una diseñadora profesional de globos con
                              diplomado del Instituto Decolovers, avalado por la
                              Universidad de la Florida.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-btns">
                    {/* <Link href="/about"> */}
                    <a
                      className="theme-btn style-two my-15 text-white"
                      href="#blog"
                    >
                      Conozca más nosotros
                      <i className="fas fa-arrow-right" />
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/faqs"> */}
                    <a
                      className="read-more text-dark text-decoration-none"
                      href="#news"
                    >
                      Cómo funciona <i className="fas fa-arrow-right" />
                    </a>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5 align-self-end">
                <div className="about-man rmb-75 wow fadeInLeft delay-0-2s">
                  <img src="assets/images/hero/67.jpg" alt="Woman" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        {/* About Section End */}
      </div>
      {/* <Fragment> */}

      {/* </Fragment> */}
    </>
  );
}
