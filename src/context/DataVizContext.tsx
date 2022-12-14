import { createContext, useContext } from "react";
import { data } from "../output";
import { getUrlToTypeTable } from "../urlToDataVizType";
import { ChildrenOnlyProps, DVContextType, Nullable } from "../models";

const DVContext = createContext<Nullable<DVContextType>>(null);

const UrlToTypeMAP = getUrlToTypeTable();

export const useDVContext = () => {
    return useContext(DVContext);
};

export function DataVizContext({ children }: ChildrenOnlyProps) {
    const value = {
        data: data,
        UrlToTypeMAP,
    };

    return <DVContext.Provider value={value}>{children}</DVContext.Provider>;
}
