import React from "react";
import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <section className="section loading">
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </section>
    </>
  );
};

export default Loading;
