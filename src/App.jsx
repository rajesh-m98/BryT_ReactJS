import Nav from "./Component/Nav.jsx"
import Logo from "./Component/Logo.jsx"
import ShopByCategory from "./Component/ShopByCategory.jsx"
import Discover from "./Component/Discover.jsx"
import PopularGifts from "./Component/PopularGifts.jsx"
import Editors from "./Component/Editors.jsx"
import EditorsPicks2 from "./Component/EditorPicks2.jsx"
import Footer from "./Component/Footer.jsx"
import Others from "./Component/Others.jsx"
import PoweredBy from "./Component/PoweredBy.jsx"
import Subscribe from "./Component/Subscribe.jsx"
import Blog from "./Component/Blog.jsx"
import LocalMakers from "./Component/LocalMakers.jsx"
import FestivePicks from "./Component/FestivePicks.jsx"

const App = ()=> {
    return(
        <div>
            <Nav/>
            <Logo/>
            <Discover/>
            <ShopByCategory/>
            <PopularGifts/>
            <Editors/>
            <EditorsPicks2/>
            <FestivePicks/>
            <LocalMakers/>
            <Blog/>
            <Subscribe/>
            <PoweredBy/>
            <Others/>
            <Footer/>
        </div>
    )
}
export default App