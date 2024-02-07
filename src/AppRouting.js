import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Envanto from "./Enavo/Envanto";
import AboutPage from "./Enavo/AboutPage"
import CardsDesing from "./Enavo/CardsDesing";
import AllPages from "./Enavo/AllPages";
import TicGame from "./Tic_Tok_Toe/TicGame";
// import Arrays from "./TypeScript/Arrays";
import UseLayoutHook from "./ReactjsProblems/UseLayoutHook";
import CallingApi from "./ReactjsProblems/CallingApi";
import TableMapping from "./ReactjsProblems/TableMapping";

const AppRouting = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Envanto />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/card" element={<CardsDesing />} />
                    <Route path="/allpages" element={<AllPages />} />
                    <Route path="/game" element={<TicGame />} />
                    {/* <Route path="/tsfile" element={<Arrays />} /> */}
                    <Route path="/layout" element={<UseLayoutHook />} />
                    <Route exact path="/api" element={<CallingApi />} />
                    <Route path="/table" element={<TableMapping/>} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default AppRouting;