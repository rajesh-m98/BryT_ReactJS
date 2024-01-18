import React from "react";
import style from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const Subscribe =()=>{
    return (
        <div id={style.subscribe}>
        <p>Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Bryt.</p> <br/>
        <table>
            <tr>
                <td>
                    <button id={style.email}>
                        <input id={style.input} type="email" placeholder="Enter Your Email"/>
                    </button>
                </td>
                <td>
                    <button id={style.subs}>Subscribe</button>
                </td>
            </tr>
        </table>
        </div>
    )
}

export default Subscribe

