import React from "react";
import Review from "./Review";

const Reviews = () => {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>What Our Client say about us</h2>
            <div className="underline"></div>
          </div>

          <Review />
        </section>
      </main>
    </>
  );
};

export default Reviews;
