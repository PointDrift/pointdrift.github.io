import Navbar from "./Navigation/Navbar"
import Home from "./Pages/home"
import About from "./Pages/about"
import Product from "./Pages/product"
import notFound from "./Pages/notFound"
import {Route, Routes} from "react-router-dom"

function App() {
    return (
        <>
            <div style={{position:"sticky"}}>
                <Navbar/>
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/product" element={<Product/>}/>
                        <Route path="*" element={notFound()}></Route>
                    </Routes>
                </div>
            </div>

        </>
    )
}

export default App