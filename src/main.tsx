import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Simulator from "./components/Simulator";
import EntryStaticPage from "./components/EntryStaticPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter basename="Expert-Goggles-Sim">
            <Routes>
                <Route path="/" element={<EntryStaticPage />}></Route>
                <Route path="*" element={<Simulator />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
