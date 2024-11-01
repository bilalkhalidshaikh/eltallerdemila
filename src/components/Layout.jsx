import React from "react";
import Footer from "./theme/Footer";
import { Container, Col, Row } from "reactstrap";
import NavbarCourse from "components/theme/NavbarCourse";
import CourseMap from "./course/CourseMap";
import { useRouter } from "next/router";
import Navbar from "./theme/Navbar";
import PerfectScrollWraper from "./common/PerfectScrollWraper";

function Layout({ children, items, currentItem, course }) {
  const { pathname } = useRouter();

  const isNavbarDark = (pathname) => {
    return (
      (pathname !== "/login" &&
        pathname !== "/register" &&
        // pathname === "/courses") ||
        pathname === "/") ||
      pathname === "/search" ||
      pathname === "/"
    );
  };

  return (
    // <>
    //   {pathname.split("/")[2] ? (
    //     <Container fluid>
    //       <Row>
    //         <Col
    //           // lg={items && pathname !== "/courses" ? "9" : "12"}
    //           lg={items && pathname !== "/" ? "9" : "12"}
    //           className="p-0 m-0 border-right"
    //         >
    //           {/* <PerfectScrollWraper> */}
    //             <Container fluid className="p-0 m-0">
    //               <NavbarCourse />
    //               {children}
    //               <Footer litle />
    //             </Container>
    //           {/* </PerfectScrollWraper> */}
    //         </Col>
    //         {items ? (
    //           <Col
    //             lg="3"
    //             className="p-0 d-none d-lg-block h-100 bg-white"
    //             style={{
    //               top: 0,
    //               right: 0,
    //               marginLeft: "auto",
    //             }}
    //           >
    //             <PerfectScrollWraper>
    //               <CourseMap
    //                 course={course}
    //                 items={items}
    //                 currentItem={currentItem}
    //               />
    //             </PerfectScrollWraper>
    //           </Col>
    //         ) : null}
    //       </Row>
    //     </Container>
    //   ) : (
    //     <PerfectScrollWraper>
    //       <>
    //           <Navbar
    //             isDark={isNavbarDark(pathname)}
    //             sticky={pathname === "/login" || pathname === "/register"}
    //           />
    //         {children}
    //         {pathname !== "/login" && pathname !== "/register" && <Footer />}
    //       </>
    //   </PerfectScrollWraper>
    //   )}
    // </>
   

    <PerfectScrollWraper>
       {/* <Navbar
                isDark={isNavbarDark(pathname)}
                sticky={pathname === "/login" || pathname === "/register"}
              /> */}
            {children}
            {/* {pathname !== "/login" && pathname !== "/register" && <Footer />} */}
    </PerfectScrollWraper>
  );
}

export default Layout;
