import React from "react";

const QuoteBox = ({ phrase, writer, changeUser, background }) => {
  return (
    <div className="quote">
      <h1 style={{ color: background }}>{phrase}</h1>
      <h3>{writer} </h3>
      <button onClick={changeUser}>
        <i className="fas fa-random"></i>
      </button>
    </div>
  );
};

export default QuoteBox;
