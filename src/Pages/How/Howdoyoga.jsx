import React from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

const Howdoyoga = () => {
  return (
    <>
      <Header />
      <div className="why-banner w-screen h-screen flex items-center justify-center flex-col text-center">
        <h2>How do yoga?</h2>
        <ul>
          <li>Kapalbhati</li>
          <li>Anulom Vilom</li>
          <li>Shavasan</li>
        </ul>
        <button className="shadow-dark shadow-lg px-4 py-2 rounded-md m-4">
          <Link to={`/`}>Back to Home</Link>
        </button>
      </div>
    </>
  );
};

export default Howdoyoga;
