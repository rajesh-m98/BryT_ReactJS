import React from "react";
import style from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Logo = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="navbar navbar-expand-md navbar-light" id={style.logo}>
                <a className="navbar-brand col-md-2 text-center h5" id={style.BryT} href="#">BryT</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-md-5 offset-md-7">
                    <ul className="navbar-nav ml-auto text-right h6">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Sign In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12" id={style.none}>
                <div className="d-none d-md-block">
                    <ul className="nav justify-content-center p-3">
                        <li className="nav-item">
                            <a className="nav-link h5 text-dark" href="#">Home & Living</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h5 text-dark" href="#">Jewellery & Accessories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h5 text-dark" href="#">Clothing & <br/>Shoes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h5 text-dark" href="#">Wedding & Party</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h5 text-dark" href="#">Gifts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h5 text-dark" href="#">Toys & Entertains</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h5 text-dark" href="#">BryT Registry</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Logo;
