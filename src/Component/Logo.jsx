import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import IndianFlag from "./Images/Indian-Flag.png"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo =()=>{
    return (
        <div id={style.logo}>
        <table id={style.table1}>
            <tr>
                <td><p id={style.etsy}>Bryt</p></td>
                <td>
                    <table id={style.search}>
                        <tr>
                            <td><input id={style.searchbox} type="text"/></td>
                            <td><FontAwesomeIcon id={style.searchbutton} icon={faMagnifyingGlass}></FontAwesomeIcon></td>
                        </tr>
                    </table>
                </td>
                <td><button id={style.signin}>Sign in</button></td>
                <td><button><img id={style.flag} src={IndianFlag} alt="" title="Country"/></button></td>
                <td><button><FontAwesomeIcon id={style.heart} icon={faHeart}></FontAwesomeIcon></button></td>
                <td><button><FontAwesomeIcon id={style.cart} icon={faCartPlus}></FontAwesomeIcon></button></td>
            </tr>
        </table>
        <div id={style.table2}>
            <button>
                <p>Diwali <br /> Specials</p>
            </button>
            <button>
                <p>Jewellery & <br/> Accessories</p>
            </button>
            <button>
                <p>Clothing & <br/> Shoes</p>
            </button>
            <button>
                <p>Home &<br/>Living</p>
            </button>
            <button>
                <p>Wedding &<br/>Party</p>
            </button>
            <button>
                <p>Toys &<br/>Entertains</p>
            </button>
            <button>
                <p>Art &<br/>Collectibles</p>
            </button>
            <button>
                <p>Craft<br/>Supplies</p>
            </button>
            <button>
                <p><i class="fa-solid fa-gift"></i>Gifts</p>
            </button>
        </div>
      </div>
    )
}

export default Logo