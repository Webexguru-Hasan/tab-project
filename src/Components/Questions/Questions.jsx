import React, { useState } from "react";
import questionsData from "../Data/data.js";
import SingleQuestion from "./SingleQuestion";

const Questions = () => {
  const [questionInfo, setQuestionInfo] = useState(questionsData);

  return (
    <>
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {questionInfo.map((question) => {
              return <SingleQuestion key={question.id} question={question} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default Questions;
