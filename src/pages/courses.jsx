import Layout from "components/Layout";
import SEO from "components/common/Seo";
import AllCourses from "components/allCourses/Courses";
import Invitation from "components/common/Invitation";
import Header from "components/allCourses/Header";
import BestCourses from "components/allCourses/BestCourses";
import { getAllAuthors, getAllCourses } from "utils/courses";

export default function Courses({ courses, authors }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Header />
      <h1 className="text-center text-decoration-underline" style={{textDecoration:'underline'}}><ul>Trabajando en ello</ul></h1>
      {/* <BestCourses courses={courses} />
      <AllCourses courses={courses} authors={authors} />
      <Invitation /> */}

    </Layout>
  );
}

export async function getStaticProps() {
  const courses = await getAllCourses();
  const authors = await getAllAuthors(courses);

  return {
    props: {
      courses,
      authors,
    },
  };
}
