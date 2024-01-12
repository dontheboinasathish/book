import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Envanto from "./Enavo/Envanto";
import AboutPage from "./Enavo/AboutPage"
import CardsDesing from "./Enavo/CardsDesing";
import AllPages from "./Enavo/AllPages";
import TicGame from "./Tic_Tok_Toe/TicGame";



const AppRouting = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/envo" element={<Envanto />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/card" element={<CardsDesing />} />
                    <Route path="/allpages" element={<AllPages />} />
                    <Route path="/game" element={<TicGame />} />
                 
                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default AppRouting;