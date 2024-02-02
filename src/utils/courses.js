// // Firebase
// import app,{firestore} from "../myFirebase";
// import { collection, getDocs, query, where } from "firebase/firestore";

// /* =========================================================
// //  *
// //  * ========================================================= */
// // export const getAllCourses = async () => {
// //   let courses = [];
// //   const db = firestore();

// //   const querySnapshot = await getDocs(collection(db, "courses"));
// //   querySnapshot.forEach((doc) => {
// //     const course = doc.data();
// //     courses.push(course);
// //   });

// //   return courses;
// // };
// export const getAllCourses = async () => {
//   let courses = [];
//   const querySnapshot = await getDocs(collection(firestore, "courses"));
//   querySnapshot.forEach((doc) => {
//     const course = doc.data();
//     courses.push(course);
//   });
//   return courses;
// };

// /* =========================================================
//  *
//  * ========================================================= */
// export const getAllAuthors = async (courses) => {
//   const db = firestore();

//   let profiles = [];
//   let authorIds = [];

//   authorIds = courses.map((course) => course.course_author_id);
//   authorIds = [...new Set(authorIds)];

//   const querySnapshot = await getDocs(collection(db, "profiles"));
//   querySnapshot.forEach((doc) => {
//     const profile = { ...doc.data(), id: doc.id };
//     profiles.push(profile);
//   });

//   return profiles;
// };
// /* =========================================================
//  *
//  * ========================================================= */

// export const getItems = async (course) => {
//   let items = [];
//   const db = firestore();

//   const querySnapshot = await getDocs(
//     query(
//       collection(db, "course_items"),
//       where("item_course_id", "==", course.id)
//     )
//   );
//   querySnapshot.forEach((doc) => {
//     const item = doc.data();
//     items.push(item);
//   });

//   return items;
// };
// /* =========================================================
//  *
//  * ========================================================= */

// export const getShortLink = (link) => {
//   let newString = link;
//   newString = newString.toLowerCase();
//   newString = newString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//   newString = newString.replace(/ /g, "_");
//   newString = newString.replace(/\?/g, "");
//   newString = newString.replace(/¿/g, "");
//   return newString;
// };
















// Import the firestore instance correctly
import { firestore } from "../myFirebase";
import { collection, query,getDoc, where,addDoc } from "firebase/firestore";
import { getDocs } from 'firebase/firestore';




// Example data
const courses = [
  { name: "Balloon Masterclass 101", description: "Intro to balloon art" },
  // ... more courses
];

const authors = [
  { name: "John Doe", bio: "Expert in balloon art" },
  // ... more authors
];

// // Function to add courses
// async function addCourses() {
//   const coursesCol = collection(firestore, "courses");
//   for (const course of courses) {
//     await addDoc(coursesCol, course);
//   }
// }

// // Function to add authors
// async function addAuthors() {
//   const authorsCol = collection(firestore, "authors");
//   for (const author of authors) {
//     await addDoc(authorsCol, author);
//   }
// }

// // Call functions to add data
// addCourses().then(() => console.log("Courses added")).catch(console.error);
// addAuthors().then(() => console.log("Authors added")).catch(console.error);
// Utility functions

// export const getAllCourses = async () => {
//   let courses = [];
//   const querySnapshot = await getDocs(collection(firestore, "courses"));
//   querySnapshot.forEach((doc) => {
//     const course = doc.data();
//     courses.push(course);
//   });
//   return courses;
// };

export const getAllCourses = async () => {
  let courses = [];
  const querySnapshot = await getDocs(collection(firestore, "courses"));
  querySnapshot.forEach((doc) => {
    // Include the document ID as part of the course object
    const course = { id: doc.id, ...doc.data() };
    courses.push(course);
  });
  return courses;
};


export const getAllAuthors = async (courses) => {
  let profiles = [];
  let authorIds = courses.map((course) => course.course_author_id);
  authorIds = [...new Set(authorIds)];

  // const querySnapshot = await getDocs(collection(firestore, "profiles"));
  const querySnapshot = await getDocs(collection(firestore, "authors"));
  querySnapshot.forEach((doc) => {
    const profile = { ...doc.data(), id: doc.id };
    profiles.push(profile);
  });

  return profiles;
};


export const getItems = async (course) => {
  let items = [];
  if (!course || !course.id) {
    console.error("Course ID is undefined.");
    return items;
  }
  const querySnapshot = await getDocs(
    query(
      collection(firestore, "course_items"),
      where("item_course_id", "==", course.id) // Make sure 'item_course_id' matches the course ID structure
    )
  );
  querySnapshot.forEach((doc) => {
    items.push(doc.data());
  });
  return items;
};



// export const getItems = async (course) => {
//   let items = [];
//   const querySnapshot = await getDocs(
//     query(
//       collection(firestore, "course_items"),
//       where("item_course_id", "==", course.id)
//     )
//   );
//   querySnapshot.forEach((doc) => {
//     const item = doc.data();
//     items.push(item);
//   });

//   return items;
// };


export const getShortLink = (link) => {
  let newString = link;
  newString = newString.toLowerCase();
  newString = newString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  newString = newString.replace(/ /g, "_");
  newString = newString.replace(/\?/g, "");
  newString = newString.replace(/¿/g, "");
  return newString;
};