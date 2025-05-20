import React from "react";
import Navbar from "./components/Navbar/Navbar";
// import Heroslider from "./components/Heroslider";
import Flagslider from "./components/Flagslider";
import Foodcard from "./components/Foodcard";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home";




function App() {
    
    return(
        <>
        {/* <Flagslider/> */}
            {/* <Routes>
                <Route index element={<home/>} />
                <Route path="/Foodcard" element={<recipes/>} />
                <Route path="/About us" element={<about_us/>} />
            </Routes> */}
        {/* <h2 className="text-4xl text-center pt-10 font-bold">Food selection</h2> */}
        {/* <Foodcard /> */}
        <Home/>
        </>
        
    );

    
}

export default App
