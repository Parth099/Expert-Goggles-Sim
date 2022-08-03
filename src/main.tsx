import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import EntryStaticPage from "./components/EntryStaticPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EntryStaticPage />}></Route>
                <Route path="/:url" element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
