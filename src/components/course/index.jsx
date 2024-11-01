import React from "react";
import CourseVideo from "./CourseVideo";

export default function index(props) {
  const { description, items, currentItem, course, authors } = props;

  // const author = authors.find(
  //   (author) => author?.id === currentItem.item_author_id
  // );
  const author = authors && authors.length > 0
    ? authors.find((author) => author?.id === currentItem.item_author_id)
    : null;


  return (
    <div className="site-wrap bg-white">
      {currentItem.item_type === "video" ? (
        <CourseVideo
          course={course}
          description={description}
          author={author}
          items={items}
          currentItem={currentItem}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
