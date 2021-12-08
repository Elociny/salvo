import {  BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/index';

export default function Routs() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}