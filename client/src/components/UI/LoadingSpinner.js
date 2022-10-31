import React from "react";
import classes from "./LoadingSpinner.modulde.css";
export const LoadingSpinner = () => {
  return (
    <div className={classes["lds-ring"]}>
      <div />
      <div />
      <div />
      <div />
    </div>

    // <div className="d-flex justify-content-center">
    //   <div className="spinner-border text-dark" role="status">
    //     <span className="visually-hidden">Loading...</span>
    //   </div>
    // </div>
  );
};
