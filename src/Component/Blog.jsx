import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bags from "./Images/Bags.avif"
import GiftIdeas from "./Images/Gift Ideas.webp"
import Crochet from "./Images/Crochet.webp"

const Blog =()=>{
    return (
        <div id={style.blog}>
        <p id={style.freshitems}>Fresh from the blog <FontAwesomeIcon id={style.arrow} icon={ faLongArrowRight }></FontAwesomeIcon> </p> <br/> <br/>
        
        <button>
            <img src={Bags} alt=""/> <br/> 
            <p id={style.line1}>Shopping Guides</p>
            <p id={style.line2}>14 Beautiful bags that Express <br/>
                Your Unique Style
            </p>
            <p id={style.line3}>Amp up your fashion game with bags that <br/> 
                perfectly match your aesthetic.</p> <br/> <br/>
        </button>
        <button>
            <img src={GiftIdeas} alt=""/> <br/> 
            <p id={style.line1}>Gift Ideas</p>
            <p id={style.line2}>The Best Gifts for Kids of <br/>
                All the Ages
            </p> 
            <p id={style.line3}>Shop the sweetest surprises for all little ones in <br/> 
                your family-these gifts for kids.
            </p> <br/> <br/>
        </button>
        <button>
            <img src={Crochet} alt=""/> <br/>
            <p id={style.line1}>Shopping Guides</p>
            <p id={style.line2}>It's Crochet Season!</p> 
            <p id={style.line3}>Discover all the wonders of crocheting—from <br/> 
                fashion finds to patterns and tools.</p> <br/> <br/>
        </button>
        </div>
    )
}

export default Blog

