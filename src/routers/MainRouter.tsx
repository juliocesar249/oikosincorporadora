import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ResidentialInfo } from "../pages/ResidentialInfo";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/residencial" element={<ResidentialInfo/>} />
      </Routes>
    </BrowserRouter>
  )
}