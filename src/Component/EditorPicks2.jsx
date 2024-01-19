import React from "react";
import style from "./editorspick2.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rabit from "./Images/Rabit.webp";
import Velvet from "./Images/Velvet.jpg";
import Planter from "./Images/Planter.webp";

const EditorsPicks2 = () => {
  return (
    <div className="container-fluid d-md-block d-none">
        <div className="row text-center p-3" id={style.editorspick2}>
            <div className="col-md-3">
                <button className="btn">
                    <p className="h4">Editors' Picks</p> <br/> <br/>
                    <p className="h3">The Diwali Shop</p> <br/> <br/>
                    <p className="h5">Shop unique finds <FontAwesomeIcon id={style.arrow} icon={ faLongArrowRight }></FontAwesomeIcon></p>
                </button>
            </div>
            <img className="col-md-3 img-fluid rounded" src={Rabit} alt=""/>
            <img className="col-md-3 img" src={Velvet} alt=""/>
            <img className="col-md-3 img" src={Planter} alt=""/>
        </div>
    </div>
  );
}

export default EditorsPicks2;
