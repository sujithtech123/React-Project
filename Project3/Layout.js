import { Link, Outlet } from "react-router-dom";
function Layout(){
    return (
        <>
        <div className="Layout">
            <img src="https://watch-shopping-demo.zohocommerce.com/Logo.png" ></img>
            <div className="Layout1"><Link to="/">HOME</Link> </div>
            <div className="Layout1"><Link to="/Product">PRODUCT</Link> </div>
            <div className="Layout1"><Link to="/Addproduct">ADDPRODUCT</Link> </div>
            <div className="Layout1"><Link to="/Addcatagries">ADDCATEGORY</Link></div>
            <div className="Layout1"><Link to="/Login">LOGIN</Link> </div>
            <div className="Layout1"><Link to="/Register">REGISTER</Link></div> 
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping"></i>  
        </div>
        <Outlet/>
        </>
    )
}
export default Layout;