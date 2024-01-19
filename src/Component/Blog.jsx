import React from "react";
import style from "./blog.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bags from "./Images/Bags.avif";
import GiftIdeas from "./Images/Gift Ideas.webp";
import Crochet from "./Images/Crochet.webp";

const Blog = () => {
  return (
    <div className="container-fluid p-4" id={style.blog}>
        <div className="row mt-5">
            <p className="h3 col-md-12">
                Fresh from the blog <FontAwesomeIcon id={style.arrow} icon={faLongArrowRight}></FontAwesomeIcon>
            </p>
        </div>
        <div className="row">
            <button className="btn col-md-4 text-center p-3">
                <img src={Bags} alt="" className="img-fluid rounded" />
                <p className="h4">Shopping Guides</p>
                <p className="h5">14 Beautiful bags that Express Your Style</p>
                <p className="h6">Amp up your fashion game with bags that perfectly match your aesthetic.</p>
            </button>
            <button className="btn col-md-4 text-center p-3">
                <img src={GiftIdeas} alt="" className="img-fluid rounded" />
                <p className="h4">Gift Ideas</p>
                <p className="h5">The Best Gifts for Kids of All the Ages</p>
                <p className="h6">Shop the sweetest surprises for all little ones in your family-these gifts for kids.</p>
            </button>
            <button className="btn col-md-4 text-center p-3">
                <img src={Crochet} alt="" className="img-fluid rounded" />
                <p className="h4">Shopping Guides</p>
                <p className="h5">It's Crochet Season !!! Come and Brag</p>
                <p className="h6">Discover all the wonders of crocheting—from fashion finds to patterns and tools.</p>
            </button>
        </div>
    </div>
  );
}

export default Blog;
