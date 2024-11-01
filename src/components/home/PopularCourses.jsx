import React, { Component } from "react";

import SingleCourse from "components/allCourses/SingleCourse";
import { popularCourses } from "../../../site.config";

export default class extends Component {
  render() {
    const { courses, authors } = this.props;

    return (
      <div className="mt-5 p-0 mx-14">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4">
              {/* <h2 className="mb-2">{popularCourses.title}</h2> */}
              <div className="section-title mb-40">
                    <span className="sub-title mb-25">Curso en vídeo</span>
                    <h1><b>{popularCourses.title}</b></h1>
              <p className="text-muted para-desc mb-0 mx-auto">
                {popularCourses.subTitle}
              </p>
                  </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          {courses.map((course, index) => (
            <div
              key={index}
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 px-2"
            >
              <SingleCourse
                course={course}
                author={authors.find((author) => {
                  return author?.id === course.course_author_id;
                })}
              />
            </div>
          ))}
          
        </div> */}
        <br/>
      </div>
    );
  }
}
