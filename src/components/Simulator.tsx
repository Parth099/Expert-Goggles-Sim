import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { DataVizContext } from "../context/DataVizContext";
import Sidebar from "./Sidebar";

function Simulator() {
    const [url, setUrl] = useState("");
    // const [ext, setExt] = useState("");
    const [displaySidebar, setDisplaySidebar] = useState(false);
    const [showOpener, setShowOpener] = useState(false);
    const search = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        let url = location.pathname.substring(1); //props URL exists or else this page would NEVER load

        if (url.charAt(url.length - 1) === "$") {
            url = url.replace("$", ".html");
        }
        setUrl(url);

        const timeout = setTimeout(() => {
            setShowOpener(true);
        }, 2000);
    }, [location, search]);
    return (
        <div className="flex relative">
            <iframe src={url} className="w-full max-height"></iframe>
            <DataVizContext>
                <div style={{ width: displaySidebar ? "450px" : "0px" }} className="max-height">
                    {displaySidebar && <Sidebar url={url} />}
                </div>
            </DataVizContext>
            <button
                type="button"
                style={{ right: displaySidebar ? "475px" : "10px" }}
                className="fixed top-5"
                onClick={() => {
                    setDisplaySidebar((state) => !state);
                }}
            >
                {showOpener && (
                    <div className="bg-[#3d3d3e] py-2 px-3 text-white rounded-lg text-xl readable-font text-left shadow-xl">
                        <strong>Expert Goggles</strong>
                        <p>Click to {displaySidebar ? "close" : "open"} guide</p>
                    </div>
                )}
            </button>
        </div>
    );
}

export default Simulator;
