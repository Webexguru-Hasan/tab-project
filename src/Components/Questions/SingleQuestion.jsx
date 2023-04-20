import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { title, info } = question;
  const handleAccordion = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div>
      <article className="question">
        <header onClick={handleAccordion}>
          <h4>{title}</h4>
          <button className="btn" onClick={handleAccordion}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    </div>
  );
};

export default SingleQuestion;
