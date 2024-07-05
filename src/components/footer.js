import React, { useState } from "react";

export default function Footer({index, HandleReset}) {
  return (
    <>
      <div className="row fixed-bottom bg-dark">
        <button className="btn btn-danger col-2" onClick={() => {HandleReset(index)}}>
          Reset
        </button>
      </div>
    </>
  );
}
