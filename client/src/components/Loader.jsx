import React from "react";
import loader from "../assets/loader.png";
export const Loader = () => {
  return (
    <>
      <section className="loader-container">
      <img src={loader} alt="Loader" className="loaderBackground" />
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
    </>
  );
};
