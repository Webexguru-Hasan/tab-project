import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "./Loading";
const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  console.log(value);
  console.log(jobs[value]);
  console.log(loading);

  //   data fetch start here

  useEffect(() => {
    async function getDataofTabs() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getDataofTabs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <Loading />
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Experiences</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          {/* btn-container */}
          <div className="btn-container">
            {jobs?.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          {/* job-info */}
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties?.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default Tabs;
