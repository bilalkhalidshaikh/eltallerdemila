import Layout from "components/Layout";
import SEO from "components/common/Seo";
import Hero from "components/home/Hero";
import Partners from "components/home/Partners";
import NewsLetter from "components/home/NewsLetter";
import PopularCourses from "components/home/PopularCourses";
import CourseItem from "components/home/CourseItem";
import Invitation from "components/common/Invitation";
import Link from "next/link";


import { getAllAuthors, getAllCourses } from "utils/courses";

export default function Index({ courses, authors }) {
  return (
    <Layout>
      <SEO title="El Taller de Mila" />
      <Hero />
      <Partners />
      {/* <section className="mb-5 container">
        <PopularCourses courses={courses} authors={authors} />
      </section> */}
      <CourseItem/>
      <NewsLetter/>
      {/* <Invitation /> */}
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
