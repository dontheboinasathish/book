import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Envanto from "./Enavo/Envanto";
import AboutPage from "./Enavo/AboutPage"
import CardsDesing from "./Enavo/CardsDesing";
import AllPages from "./Enavo/AllPages";



const AppRouting=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/envo" element={<Envanto/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/card" element={<CardsDesing/>}/>
                <Route path="/allpages" element={<AllPages/>}/>
            </Routes>
            </BrowserRouter>

        </div>
    )
}
export default AppRouting;