import React from "react";
import classes from "./ErrorAlert.module.css";

export const ErrorAlert = ({ details }) => {
  return (
    <div className={classes["error"]}>
      <div className="alert alert-danger" role={"alert"}>
        <strong>An error occurred</strong> {details || ""}
      </div>
    </div>
    
    // <div className="d-flex justify-content-center">
    //   <div className="alert alert-danger" role={"alert"}>
    //     <strong>An error occurred</strong> {details || ""}
    //   </div>
    // </div>
    
  );
};


