import React from "react";
import style from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Subscribe = () => {
  return (
    <div id={style.subscribe} className="container-fluid">
      <div className="row">
        <p className="col-md-12 text-center font-weight-bold p-3">
          Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Bryt.
        </p>
      </div>
      <div className="row p-3">
        <div className="col-md-5 mb-2 offset-md-2">
          <input type="email" className="form-control" placeholder="Enter Your Email" />
        </div>
        <div className="col-md-5">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
