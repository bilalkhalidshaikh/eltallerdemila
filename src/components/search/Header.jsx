import Icons from "components/common/Icons";
import React from "react";
import { search as searchConfig } from "../../../site.config";
import { useRouter } from "next/router";

export default function Hero({ word }) {
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const word = document.getElementById("search-box").value;
    router.replace(`/${"search"}?word=${word}`);
  };

  return (
    <>
      <section className="section pt-5 pb-0 mt-4">
        <div className="container-fluid mt-md-1 px-0 px-md-3">
          <div
            className="rounded py-5 pb-5 px-3 px-sm-0 shadow-md"
            style={{
              backgroundColor: "#4E795E",
            }}
          >
            <div className="container">
              <div className="title-heading text-center">
                <h2 className="text-white title-dark mb-3">
                  {`${searchConfig.title}: "${word}"`}
                </h2>
              </div>
            </div>
          </div>
          <div className="subcribe-form px-4" style={{ marginTop: -25 }}>
            <form style={{ maxWidth: "400px" }} onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  id="search-box"
                  defaultValue={word}
                  className="text-dark rounded-pill shadow-md bg-light"
                  placeholder={searchConfig.searchPlaceholder}
                />
                <button type="submit" className="btn btn-pills btn-primary">
                  <Icons icon="search" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
