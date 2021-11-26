import React from "react";

export default function About(props) {
  return (
    <div
      className="container my-4 "
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h2>About Us</h2>
      

      <p className="my-4 ">
        TheText is a basic utility web app that can help you to manipulate text
        or we can say string
      </p>
      <p> you can perform the different tasks with this.</p>
      <p>this web app is based on React js </p>
      <p>hope you will like it...</p>
      <p>thankyou</p>
      </div>
    
  );
}
