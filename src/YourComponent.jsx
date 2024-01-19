import React from 'react';
import './YourComponent.css'; // Import your CSS file

const YourComponent = () => {
  return (
    <>
      {/* --------------------------- NAV --------------------------------- */}
      <div id="nav">
         <p> Find the PERFECT present for all your loved ones. Go on, explore our <span>Gift Guide</span> now!</p>
      </div>
      <div id="logo">
      <table id="table1" cellspacing="20px">
            <tr>
                <td><p id="etsy">Bryt</p></td>
                <td>
                    <table id="search">
                        <tr>
                            <td><input id="searchbox" type="text"/></td>
                            <td><i id="searchbutton" class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i></td>
                        </tr>
                    </table>
                </td>
                <td><button id="signin">Sign in</button></td>
                <td><button><img id="flag" src="./Images/Indian-Flag.png" alt="" title="Country"/></button></td>
                <td><button><i id="heart" class="fa-regular fa-heart"></i></button></td>
                <td><button><i id="cart" class="fa-solid fa-cart-plus"></i></button></td>
            </tr>
        </table>
        <div id="table2">
            <button>
                <p>Diwali Specials</p>
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
            <button>
                <p>Bryt<br/>Registry</p>
            </button>
        </div>
      </div>
      {/* ------------------------------ DISCOVER ------------------------------- */}
      <div id="discover" className="row">
        <div id="para" class="col-12">
           <p> Discover festive finds for all your celebrations from talented sellers.</p>
        </div>
        <div id="images" class="col-12">
            <button class="col-2">
                <img src="./Images/Home.webp" alt=""/> <br/> <br/>
                <p>Home & Living</p>
            </button>
            <button class="col-2">
                <img src="./Images/Jewellery.webp" alt=""/> <br/> <br/>
                <p>Jewellery</p>
            </button>
            <button class="col-2">
                <img src="./Images/Clothing.webp" alt=""/> <br/> <br/>
                <p>Clothing</p>
            </button>
            <button class="col-2">
                <img src="./Images/Weddings.webp" alt=""/> <br/> <br/>
                <p>Weddings</p>
            </button>
            <button class="col-2">
                <img src="./Images/Gifts.webp" alt=""/> <br/> <br/>
                <p>Gifts</p>
            </button>
            <button class="col-2">
                <img src="./Images/Fashion.webp" alt=""/> <br/> <br/>
                <p>Fashion <br/> Accessories</p>
            </button>
        </div>
      </div>
      {/* ---------------------- SHOP BY CATEGORY ------------------------ */}
      <div id="shopcategory">
          {/* ... (rest of your HTML) */}
      </div>
      {/* ---------------------- POPULAR GIFTS -------------------------- */}
      <div id="populargifts">
          {/* ... (rest of your HTML) */}
      </div>
      {/* ------------------------- EDITORS PICK --------------------------- */}
      <div id="editors">
          {/* ... (rest of your HTML) */}
      </div>
      {/* ------------------------- EDITORS PICK 1 --------------------------- */}
      <div id="editorspick1">
          {/* ... (rest of your HTML) */}
      </div>
      {/* ------------------------- EDITOR PICKS 2 -------------------------- */}
      <table id="editorspick2">
          {/* ... (rest of your HTML) */}
      </table>
      {/* ----------------------- FESTIVE PICKS ------------------------------ */}
      <table id="festivepicks" cellspacing="10px">
          {/* ... (rest of your HTML) */}
      </table>
      {/* -------------------------Local Makers -------------------------------- */}
      <div id="localmakers">
          {/* ... (rest of your HTML) */}
      </div>
      {/* ----------------------------BLOG -------------------------------- */}
      <div id="blog">
          {/* ... (rest of your HTML) */}
      </div>
      {/* ---------------------------- Subscribe ---------------------------- */}
      <div id="subscribe">
          {/* ... (rest of your HTML) */}
      </div>
      {/* ------------------------ POWERED BY------------------------------ */}
      <div id="poweredby">
          {/* ... (rest of your HTML) */}
      </div>
      {/* ------------------------- OTHERS ------------------- */}
      <div id="others">
          {/* ... (rest of your HTML) */}
      </div>
      {/* ------------------------- FOOTER ------------------------ */}
      <div id="footer">
          {/* ... (rest of your HTML) */}
      </div>
    </>
  );
};

export default YourComponent;
