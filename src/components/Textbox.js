import React, { useState } from "react";

export default function Textbox(props) {
  const [text, setText] = useState("");

  // to convert uppercase 
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // to clear textbox 
  const handleClClick = () => {
    let newText = "";
    setText(newText);
  };

  // to copy textbox 
const handleCopy = ()=>{
  navigator.clipboard.writeText(text)

}

  //  to handle lowercase 
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  
  // remove extra space 
  const handleSpace = () => {
    let newText=text.split(/[  ]+/)
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <div
          className="mb-3 "
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>{props.heading}</h2>
          <textarea
            className="form-control "
            value={text}
            onChange={handleOnChange}
            id="box"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button className="btn btn-secondary" onClick={handleClClick}>
            Clear
          </button> 
          
          <button className="btn btn-secondary mx-2" onClick={handleCopy}>
            Copy
          </button>

          <button
            className="btn btn-primary my-2 "
            onClick={handleUpClick}
          >
            Convert Upper Case
          </button>

          <button className="btn btn-primary my-2 mx-2 " onClick={handleLoClick}>
            Convert Lower Case
          </button> 
          
          <button className="btn btn-primary my-2  " onClick={handleSpace}>
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h5>Word Count</h5>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Word and {text.length} Character
        </p>
      </div>
    </>
  );
}
