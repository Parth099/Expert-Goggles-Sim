import React, { useEffect, useState } from "react";
import { useDVContext } from "../context/DataVizContext";
import { Nullable, ScrapedData } from "../models";
import VizText from "./VizText";

interface SidebarProps {
    url: string;
}

const CHAT_LIMIT = 200;

export default function Sidebar(props: SidebarProps) {
    const DV_Data = useDVContext();

    const [sideBarData, setSideBarData] = useState<Nullable<ScrapedData>>(null);
    // const [mainImg, setMainImg] = useState<any>();
    // const [anatImg, setAnatImg] = useState<any>();
    const [isLimitActive, updateLimit] = useState(true);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (!DV_Data?.data) return;
        let TYPE = DV_Data.UrlToTypeMAP.get(props.url);

        //if type is invalid (somehow)
        if (!TYPE) return;
        let index = DV_Data.data.findIndex((value) => value.type == TYPE);
        setSideBarData(DV_Data.data[index]);

        //depends on the load of the vars below
    }, [props.url, DV_Data]);

    return (
        <div className="sidebar w-[450px] block border-l-black border-l-1 p-4 sidebar-shadow sp-font max-height overflow-y-auto">
            <h1 className="title font-bold text-3xl border-b-black border-b-2">📋{sideBarData?.type}</h1>
            <img src={sideBarData?.mainImgLink} alt={`examples of ${sideBarData?.type}`} className="w-full" />

            {sideBarData?.descriptions && (
                <VizText
                    setDisplayText={setDisplayText}
                    displayText={sideBarData?.descriptions}
                    acceptLimit={isLimitActive}
                    updateLimit={() => {
                        updateLimit((lim) => !lim);
                    }}
                />
            )}

            <h1 className="title font-bold text-3xl border-b-black border-b-2">🦴Visualization Anatomy</h1>
            <img src={sideBarData?.anatImgLink} alt={`examples of ${sideBarData?.type}`} className="w-full" />
        </div>
    );
}
