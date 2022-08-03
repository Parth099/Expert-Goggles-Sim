import React, { useEffect, useState } from "react";
import { useDVContext } from "../context/DataVizContext";
import { Nullable, ScrapedData } from "../models";

interface SidebarProps {
    url: string;
}

export default function Sidebar(props: SidebarProps) {
    const DV_Data = useDVContext();

    const [sideBarData, setSideBarData] = useState<Nullable<ScrapedData>>(null);

    useEffect(() => {
        if (!DV_Data?.data) return;
        let TYPE = DV_Data.UrlToTypeMAP.get(props.url);

        //if type is invalid (somehow)
        if (!TYPE) return;
        let index = DV_Data.data.findIndex((value) => value.type == TYPE);
        setSideBarData(DV_Data.data[index]);

        //depends on the load of the vars below
    }, [props.url, DV_Data]);

    console.log(sideBarData);

    return (
        <div className="sidebar w-[450px] block border-l-black border-l-1 p-4 sidebar-shadow">
            <h1 className="title font-bold">{sideBarData?.type}</h1>
        </div>
    );
}
