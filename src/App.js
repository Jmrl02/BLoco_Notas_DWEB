import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import HomeScreen from "./pages/HomeScreen"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function PasswordLoginWithFirebase(){
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/home" element={<HomeScreen/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default PasswordLoginWithFirebase;