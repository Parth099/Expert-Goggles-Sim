import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataVizContext } from "../context/DataVizContext";
import Sidebar from "./Sidebar";

function Simulator() {
    const [url, setUrl] = useState("");
    const location = useLocation();

    useEffect(() => {
        const url = location.pathname.substring(1); //props exists or else this page would NEVER load
        setUrl(url);
        console.log(url);
    }, [location]);

    return (
        <div className="flex">
            <iframe src={url} className="w-full max-height"></iframe>
            <DataVizContext>
                <Sidebar url={url} />
            </DataVizContext>
        </div>
    );
}

export default Simulator;
