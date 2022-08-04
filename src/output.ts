import { ScrapedData } from "./models";

export const data: ScrapedData[] = [
    {
        type: "Scatter Plot",
        descriptions: [
            { type: "p", text: "Also known as a Scatter Graph, Point Graph, X-Y Plot, Scatter Chart or Scattergram." },
            {
                type: "p",
                text: "Scatterplots use a collection of points placed using Cartesian Coordinates to display values from two variables. By displaying a variable in each axis, you can detect if a relationship or correlation between the two variables exists.",
            },
            {
                type: "p",
                text: "Various types of correlation can be interpreted through the patterns displayed on Scatterplots. These are: positive (values increase together), negative (one value decreases as the other increases), null (no correlation), linear, exponential and U-shaped. The strength of the correlation can be determined by how closely packed the points are to each other on the graph. Points that end up far outside the general cluster of points are known as outliers.",
            },
            {
                type: "p",
                text: "Lines or curves are fitted within the graph to aid in analysis and are drawn as close to all the points as possible and to show how all the points were condensed into a single line would look. This is typically known as the Line of Best Fit or a Trend Line and can be used to make estimates via interpolation.",
            },
            {
                type: "p",
                text: "Scatterplots are ideal when you have paired numerical data and you want to see if one variable impacts the other. However, do remember that correlation is not causation and another unnoticed variable may be influencing results.",
            },
        ],
        functions: ["Patterns", "Relationships"],
        mainImgLink: "https://imgur.com/BLWCcA9.png",
        anatImgLink: "https://imgur.com/wkTCONm.png",
    },
];
