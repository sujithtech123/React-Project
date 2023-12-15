import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./Project3/Home"
import Product from "./Project3/Product"
import Layout from "./Project3/Layout"
import Login from "./Project3/Login"
import Register from "./Project3/Register"
import Addproduct from "./Project3/Addproduct"
import Addcatagries from "./Project3/Addcatagries"
import "./index.css"
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"

export default function App()
{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="Product" element={<Product/>}/>
                    <Route path="Addproduct" element={<Addproduct/>}/>
                    <Route path="Addcatagries" element={<Addcatagries/>}/>
                    <Route path="Login" element={<Login/>}/>
                    <Route path="Register" element={<Register/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<App/>)
