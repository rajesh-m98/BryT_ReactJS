import React from "react";
import style from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resin from "./Images/Resin.webp";
import Homemade from "./Images/Handmade.webp";
import Brownfields from "./Images/Brownfields.webp";
import Brass from "./Images/Brass.webp";
import Foil from "./Images/Foil.webp";
import Rangoli from "./Images/Rangoli.webp";

const Editors = () => {
  return (
    <div className="container-fluid">
        <div className="row p-3" id={style.editors}>
            <button className="col-md-3 btn">
                <p className="h4">Editors' Picks</p> <br /> <br />
                <p className="h3">The Diwali Shop</p> <br /> <br />
                <p className="h5">Shop these unique finds <FontAwesomeIcon id={style.arrow} icon={faLongArrowRight}></FontAwesomeIcon></p>
            </button>
            <div className="col-md-3" id={style.editorspick1}>
                <button className="btn w-75 h-50">
                    <img src={Resin} alt="" className="img-fluid rounded" />
                </button>
            </div>
            <div className="col-md-3" id={style.editorspick1}>
                <button className="btn w-75 h-50">
                    <img src={Homemade} alt="" className="img-fluid rounded" />
                </button>
            </div>
            <div className="col-md-3" id={style.editorspick1}>
                <button className="btn w-75 h-50">
                    <img src={Brownfields} alt="" className="img-fluid rounded" />
                </button>
            </div>
            <div className="col-md-3" id={style.editorspick1}>
                <button className="btn w-75 h-50">
                    <img src={Brass} alt="" className="img-fluid rounded" />
                </button>
            </div>
            <div className="col-md-3" id={style.editorspick1}>
                <button className="btn w-75 h-50">
                    <img src={Foil} alt="" className="img-fluid rounded" />
                </button>
            </div>
            <div className="col-md-3" id={style.editorspick1}>
                <button className="btn w-75 h-50">
                    <img src={Rangoli} alt="" className="img-fluid rounded"/>
                </button>
            </div>
            <div className="col-md-3" id={style.editorspick1}>
                <button className="btn w-75 h-50">
                    <p className="h5"> Make your celebrations even more special with extraordinary finds! </p>
                </button>
            </div>
        </div>
    </div>
  );
};

export default Editors;
