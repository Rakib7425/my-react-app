import React, { useState } from "react";
import PropTypes from "prop-types";


export default function Form(props) {
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleUpClickLower = () => {
    // console.log("LowerCase was Clicked");
    let newTextlower = text.toLowerCase();
    setText(newTextlower);
  };

  const handleUpClickEachUpper = (event) => {
    // console.log("On change Each Uppercase");

    //split the above string into an array of strings
    //whenever a blank space is encountered

    const arr = text.split(" ");

    //loop through each element of the array and capitalize the first letter.

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    const str2 = arr.join(" ");
    console.log(str2);

    setText(str2);
  };

  const handleUpClickClear = (event) => {
    // console.log("On clear");
    setText(" ");
  };
  const [text, setText] = useState(" ");
  // setText("I am Your bf ")
  return (
    <>
      <div className="container max-w-[90%] text-2xl min-h-full rounded-md shadow-2xl" id="form-container-background">
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="MyBox" className="form-label">
                <h3>
                  <small className="text-body-secondary">
                    {props.Heading}{" "}
                  </small>
                </h3>
              </label>
              <textarea
                className="form-control bg-dark text-light-emphasis"
                data-bs-theme="dark"
                id="MyBox"
                rows="8"
                value={text}
                onChange={handleOnChange}
              ></textarea>
              <h3>
                <small className="text-body-primary  ">
                  Words Count & Characters count
                </small>
              </h3>
              <div className="alert alert-secondary " role="alert"> Number of Words {text.split(" ").length} & Number of characters {text.length} Can Be Read in {0.008* text.split(" ").length} (for machine) </div>
              <h3>
                <small className="text-body-primary  ">
                 Preview
                </small>
              </h3>
              <div className="alert alert-secondary " role="alert">{text}</div>
            </div>
            <button
              type="button"
              className="btn btn-outline-primary me-4 my-2"
              onClick={handleUpClick}
            >
              Convert To UpperCase
            </button>
            <button
              type="button"
              className="btn btn-outline-success me-4 my-2"
              onClick={handleUpClickLower}
            >
              Convert LowerCase
            </button>
            <button
              type="button"
              className="btn btn-outline-success me-4 my-2"
              onClick={handleUpClickEachUpper}
            >
              Convert to uppercase of Each Word
            </button>
            <button
              type="button"
              className="btn btn-outline-danger me-4 my-2"
              onClick={handleUpClickClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
Form.propTypes = {
  Heading: PropTypes.string,
};
