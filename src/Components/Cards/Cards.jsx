import React from "react";
import { useState, useEffect } from "react";
import "./Cards.css";

const Cards = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        console.log(data.slip.advice); // Log the fetched data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-20">
      <h2 className="text-center mb-4 text-4xl">Random Quote!</h2>
      <div className="card-container flex flex-wrap content-center rounded">
        <div className="advice-box w-80 mx-auto bg-white p-4 h-40 flex items-center justify-center text-center shadow-md">
          <h2>{advice}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
