interface Mapping {
    url: string;
    type: string;
}

const urlToType: Mapping[] = [
    {
        url: "https://pudding.cool/2021/08/nba-carry/",
        type: "Scatter Plot",
    },
    {
        url: "https://www.nytimes.com/interactive/2021/world/covid-cases.html",
        type: "Area Graph",
    },
];

export const getUrlToTypeTable = () => {
    const MAP = new Map<string, string>();
    urlToType.forEach((val: Mapping) => {
        MAP.set(val.url, val.type);
    });

    return MAP;
};
