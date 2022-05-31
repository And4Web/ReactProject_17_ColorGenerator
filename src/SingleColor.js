import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

function SingleColor({ rgb, weight, index }) {
  return (
    <div
      style={{
        height: "8rem",
        width: "12rem",
        margin: "5px",
        border: "1px solid black",
      }}
    >
      <h4>SingleColor</h4>
    </div>
  );
}

export default SingleColor;
