import React, { createContext, useContext } from "react";
import { data, ScrapedData } from "../assets/scraped-data/output";

interface ChildrenOnlyProps {
    children: React.ReactNode;
}

type Nullable<T> = T | null;

const DVContext = createContext<Nullable<ScrapedData[]>>(null);

export const useDVContext = () => {
    useContext(DVContext);
};

export function DataVizContext({ children }: ChildrenOnlyProps) {
    return <DVContext.Provider value={data}>{children}</DVContext.Provider>;
}
