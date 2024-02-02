import SingleCourse from "components/SingleCourse";
import Layout from "components/Layout";
import { getAllAuthors, getAllCourses, getItems } from "utils/courses";

export default function Post(props) {
  return (
    <>
    <Layout>
      <SingleCourse {...props} />
    </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const courses = await getAllCourses();
  const paths = []; 

  courses.forEach((course) => {
    paths.push(`/${course.course_short_link}`);
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { course: course_short_link },
}) {
  // const courses = await getAllCourses();
  
  // const course = courses.find(
  //   (course) => course.course_short_link === course_short_link
  // );

  // const items = await getItems(course);
  const courses = await getAllCourses();
  console.log("Courses:", courses); // Debugging statement to verify course IDs

  const course = courses.find(course => course.course_short_link === course_short_link);
  console.log("Selected Course:", course); // Debugging statement to verify selected course

  const items = await getItems(course);
  console.log("Items for Course:", items); // Debugging statement to verify fetched items

  const authors = await getAllAuthors(courses);
  
  return { props: { courses, authors, course, items } };
}
