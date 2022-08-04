export interface ChildrenOnlyProps {
    children: React.ReactNode;
}

export type Nullable<T> = T | null;

export interface ScrapedData {
    type: string;
    descriptions: {
        type: string;
        text: string;
    }[];
    functions: string[];
    mainImgLink: string;
    anatImgLink: string;
}

export interface DVContextType {
    data: ScrapedData[];
    UrlToTypeMAP: Map<string, string>;
}
