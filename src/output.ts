import { ScrapedData } from "./models";

export const data: ScrapedData[] = [
    {
        type: "Arc Diagram",
        descriptions: [
            {
                type: "p",
                text: "Arc Diagrams are an alternate way of representing two- dimensional Network Diagrams. In Arc Diagrams, nodes are placed along a single line (a one-dimensional axis) and arcs are used to show connections between those nodes.",
            },
            {
                type: "p",
                text: "The thickness of each arc line can be used to represent frequency between the source and target node. Arc Diagrams can be useful in finding the co-occurrence within the data.",
            },
            {
                type: "p",
                text: "The downside to Arc Diagrams is they don't show structure and connections between nodes as well as 2D charts do and too many links can make the diagram hard to read due to clutter.",
            },
            { type: "p", text: "- - -" },
            { type: "p", text: "Related academic paper: Arc Diagrams: Visualizing Structure in Strings, Martin Wattenberg" },
        ],
        functions: ["Patterns", "Relationships"],
        imgName: "arcdiagram",
        imgExt: ["png", "png"],
    },
    {
        type: "Area Graph",
        descriptions: [
            {
                type: "p",
                text: "Area Graphs are Line Graphs but with the area below the line filled in with a certain colour or texture. Area Graphs are drawn by first plotting data points on a Cartesian coordinate grid, joining a line between the points and finally filling in the space below the completed line.",
            },
            {
                type: "p",
                text: "Like Line Graphs, Area Graphs are used to display the development of quantitative values over an interval or time period. They are most commonly used to show trends, rather than convey specific values.",
            },
            {
                type: "p",
                text: "Two popular variations of Area Graphs are: grouped and Stacked Area Graphs. Grouped Area Graphs start from the same zero axis, while Stacked Area Graphs have each data series start from the point left by the previous data series.",
            },
        ],
        functions: ["Patterns", "Data over time"],
        imgName: "areagraph",
        imgExt: ["png", "png"],
    },
    {
        type: "Bar Chart",
        descriptions: [
            { type: "p", text: "As known as Bar Graph or Column Graph." },
            {
                type: "p",
                text: "The classic Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale.",
            },
            {
                type: "p",
                text: 'Bars Charts are distinguished from Histograms, as they do not display continuous developments over an interval. Bar Chart\'s discrete data is categorical data and therefore answers the question of "how many?" in each category.',
            },
            { type: "p", text: "One major flaw with Bar Charts is that labelling becomes problematic when there are a large number of bars." },
        ],
        functions: ["Comparisons", "Patterns"],
        imgName: "barchart",
        imgExt: ["png", "png"],
    },
    {
        type: "Box and Whisker Plot",
        descriptions: [
            {
                type: "p",
                text: "A Box and Whisker Plot (or Box Plot) is a convenient way of visually displaying the data distribution through their quartiles.",
            },
            {
                type: "p",
                text: "The lines extending parallel from the boxes are known as the whiskers, which are used to indicate variability outside the upper and lower quartiles. Outliers are sometimes plotted as individual dots that are in-line with whiskers. Box Plots can be drawn either vertically or horizontally.",
            },
            {
                type: "p",
                text: "Although Box Plots may seem primitive in comparison to a Histogram or Density Plot, they have the advantage of taking up less space, which is useful when comparing distributions between many groups or datasets.",
            },
            { type: "p", text: "Here are the types of observations one can make from viewing a Box Plot:" },
            { type: "li", text: "What the key values are, such as: the average, median 25th percentile etc." },
            { type: "li", text: "If there are any outliers and what their values are." },
            { type: "li", text: "Is the data symmetrical." },
            { type: "li", text: "How tightly is the data grouped." },
            { type: "li", text: "If the data is skewed and if so, in what direction." },
            { type: "p", text: "Two of the most commonly used variation of Box Plot are: variable-width Box Plots and notched Box Plots." },
        ],
        functions: ["Distribution", "Range", "Comparisons", "Patterns"],
        imgName: "boxandwhiskerplot",
        imgExt: ["png", "png"],
    },
    {
        type: "Brainstorm",
        descriptions: [
            { type: "p", text: "As known as a Mind-map." },
            {
                type: "p",
                text: "A Brainstorm is a diagram used to map associated ideas, words, images and concepts together. Brainstorms are also a tool and method for idea generation, finding associations, classifying ideas, organising information, visualising structure and a general aid to studying. Brainstorms are often used at the initial stage of a project and work as a form of note-taking. They can also be useful in collaboration work and team-building morale.",
            },
            {
                type: "p",
                text: "The structure of a Brainstorm is as follows: major categories extend out from a central node. Lesser categories branch out of the major ones as subcategories, which can also develop their own related subcategories.",
            },
            { type: "p", text: "Here's a simple guide to creating a Brainstorm:" },
            {
                type: "p",
                text: "1. Start in the center of a page and write the title of the project or topic by encapsulating it in a shape (typically a circle or cloud).\n2. Think of relevant, useful or related words or categories to the subject you are investigating.\n3. Then, for each category, draw extending out of the central title (in any direction), lines with the name of the category at the end.\n4. Now for each of the categories, think of any words that relate to it and draw in the same fashion as in the previous step.\n5. You can repeat step 4 for the new set of subcategories or highlight words if need be.",
            },
        ],
        functions: ["Concepts", "Relationships"],
        imgName: "brainstorm",
        imgExt: ["png", "png"],
    },
    {
        type: "Bubble Chart",
        descriptions: [
            { type: "p", text: "A Bubble Chart is a multi-variable graph that is a cross between a Scatterplot and a Proportional Area Chart." },
            {
                type: "p",
                text: "Like a Scatterplot, Bubble Charts use a Cartesian coordinate system to plot points along a grid where the X and Y axis are separate variables. However. unlike a Scatterplot, each point is assigned a label or category (either displayed alongside or on a legend). Each plotted point then represents a third variable by the area of its circle. Colours can also be used to distinguish between categories or used to represent an additional data variable. Time can be shown either by having it as a variable on one of the axis or by animating the data variables changing over time.",
            },
            {
                type: "p",
                text: "Bubble Charts are typically used to compare and show the relationships between categorised circles, by the use of positioning and proportions. The overall picture of Bubble Charts can be used to analyse for patterns/correlations.",
            },
            {
                type: "p",
                text: "Too many bubbles can make the chart hard to read, so Bubble Charts have a limited data size capacity. This can be somewhat remedied by interactivity: clicking or hovering over bubbles to display hidden information, having an option to reorganise or filter out grouped categories.",
            },
            {
                type: "p",
                text: "Like with Proportional Area Charts, the sizes of the circles need to be drawn based on the circle's area, not its radius or diameter. Not only will the size of the circles change exponentially, but this will lead to misinterpretations by the human visual system.",
            },
        ],
        functions: ["Comparisons", "Data over time", "Distribution", "Patterns", "Proportions", "Relationships"],
        imgName: "bubblechart",
        imgExt: ["png", "png"],
    },
    {
        type: "Bubble Map",
        descriptions: [
            {
                type: "p",
                text: "With this data map, circles are displayed over a designated geographical region with the area of the circle proportional to its value in the dataset.",
            },
            {
                type: "p",
                text: "Bubble Maps are good for comparing proportions over geographic regions without the issues caused by regional area size, as seen on Choropleth Maps. However, a major flaw with Bubble Maps is that overly large bubbles can overlap other bubbles and regions on the map, so this needs to be accounted for.",
            },
        ],
        functions: ["Location", "Proportions"],
        imgName: "bubblemap",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Bullet Graph",
        descriptions: [
            {
                type: "p",
                text: 'Used typically to display performance data, Bullet Graphs functions like a Bar Chart, but are accompanied by extra visual elements to pack in more context. Originally, Bullet Graphs were developed by Stephen Few as an alternative to dashboard gauges and meters. This is because they often displayed not enough information, were less space-efficient and were cluttered with "chartjunk".',
            },
            {
                type: "p",
                text: "The main data value is encoded by a length of the main bar in the middle of the chart, known as the Feature Measure. The line marker that runs perpendicular to the orientation of the graph is known as the Comparative Measure and is used as a target marker to compare against the Feature Measure value. So if the main bar has passed the position of Comparative Measure, you know you've hit your goal.",
            },
            {
                type: "p",
                text: "The segmented coloured bars behind the Feature Measure are used to display qualitative range scores. Each colour shade (the three shades of grey in the example above) are used to assign a performance range rating. So for example, poor, average and great. When using Bullet Graphs, it's ideal to keep the maximum number of ranges to five.",
            },
            { type: "p", text: "- - -" },
            { type: "p", text: "You can find out more on Bullet Graphs in Stephen Few's guide: Bullet Graph Design Specification" },
        ],
        functions: ["Comparisons", "Ranges"],
        imgName: "bulletgraph",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Calendar",
        descriptions: [
            {
                type: "p",
                text: "Throughout human history, various calendar systems have been developed as an organisational tool to help us plan ahead. Calendars as a visual tool are used to display periods of time and to display the organisation of events. Periods of time are often displayed and divided into units such as days, weeks, months and years. A date is the designation of a single, specific day within such a system.",
            },
            {
                type: "p",
                text: "Today, the most common form of Calendar is the Gregorian Calendar. Typically it's displayed in separate monthly grids of seven columns (for each day of the week) and five to six rows. However, the format for any calendar is not set in stone so their design can vary, so long as they visually show the chronological sequence of dates or time units.",
            },
            { type: "p", text: "A list of different ways Calendars can be combined with other forms of data visualisation can be found here." },
        ],
        functions: ["Data over time", "Reference Tool"],
        imgName: "calendar",
        imgExt: ["png", "png"],
    },
    {
        type: "Candlestick Chart",
        descriptions: [
            { type: "p", text: "As known as a Japanese Candlestick Chart." },
            {
                type: "p",
                text: "This type of chart is used as a trading tool to visualise and analyse the price movements over time for securities, derivatives, currencies, stocks, bonds, commodities, etc. Although the symbols used in Candlestick Charts resemble a Box Plot, they function differently and therefore, are not to be confused with one another.",
            },
            {
                type: "p",
                text: "Candlestick Charts display multiple bits of price information such as the open price, close price, highest price and lowest price through the use of candlestick-like symbols. Each symbol represents the compressed trading activity for a single time period (a minute, hour, day, month, etc). Each Candlestick symbol is plotted along a time scale on the x-axis, to show the trading activity over time.",
            },
            {
                type: "p",
                text: "The main rectangle in the symbol is known as the real body, which is used to display the range between the open and close price of that time period. While the lines extending from the bottom and top of the real body is known as the lower and upper shadows (or wick). Each shadow represents the highest or lowest price traded during the time period represented. When the market is Bullish (the closing price is higher than it opened), then the body is coloured typically white or green. But when the market is Bearish (the closing price is lower than it opened), then the body is usually coloured either black or red.",
            },
            {
                type: "p",
                text: "Candlestick Charts are great for detecting and predicting market trends over time and are useful for interpreting the day-to-day sentiment of the market, through each candlestick symbol's colouring and shape. For example, the longer the body is, the more intense the selling or buying pressure is. While, a very short body, would indicate that there is very little price movement in that time period and represents consolidation.",
            },
            {
                type: "p",
                text: "Candlestick Charts help reveal the market psychology (the fear and greed experienced by sellers and buyers) through the various indicators, such as shape and colour, but also by the many identifiable patterns that can be found in Candlestick Charts. In total, there are 42 recognised patterns that are divided into simple and complex patterns. These patterns found in Candlestick Charts are useful for displaying price relationships and can be used for predicting the possible future movement of the market. You can find a list and description of each pattern here.",
            },
            {
                type: "p",
                text: "Please bear in mind, that Candlestick Charts don't express the events taking place between the open and close price - only the relationship between the two prices. So you can't tell how volatile trading was within that single time period.",
            },
        ],
        functions: ["Data over time", "Patterns", "Ranges"],
        imgName: "candlestickchart",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Chord Diagram",
        descriptions: [
            {
                type: "p",
                text: "This type of diagram visualises the inter-relationships between entities. The connections between entities are used to display that they share something in common. This makes Chord Diagrams ideal for comparing the similarities within a dataset or between different groups of data.",
            },
            {
                type: "p",
                text: "Nodes are arranged along a circle, with the relationships between points connected to each other either through the use of arcs or Bezier curves. Values are assigned to each connection, which is represented proportionally by the size of each arc. Colour can be used to group the data into different categories, which aids in making comparisons and distinguishing groups.",
            },
            { type: "p", text: "Over-cluttering becomes an issue with Chord Diagrams when there are too many connections displayed." },
        ],
        functions: ["Comparisons", "Relationships"],
        imgName: "chorddiagram",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Geo Map",
        descriptions: [
            {
                type: "p",
                text: "Choropleth Maps display divided geographical areas or regions that are coloured, shaded or patterned in relation to a data variable. This provides a way to visualise values over a geographical area, which can show variation or patterns across the displayed location.",
            },
            {
                type: "p",
                text: "The data variable uses colour progression to represent itself in each region of the map. Typically, this can be a blending from one colour to another, a single hue progression, transparent to opaque, light to dark or an entire colour spectrum.",
            },
            {
                type: "p",
                text: "One downside to the use of colour is that you can't accurately read or compare values from the map. Another issue is that larger regions appear more emphasised then smaller ones, so the viewer's perception of the shaded values are affected.",
            },
            {
                type: "p",
                text: "A common error when producing Choropleth Maps is to encode raw data values (such as population) rather than using normalized values (calculating population per square kilometre for example) to produce a density map.",
            },
        ],
        functions: ["Comparisons", "Location", "Patterns"],
        imgName: "choroplethmap",
        imgExt: ["png", "png"],
    },
    {
        type: "Circle Packing",
        descriptions: [
            { type: "p", text: "As known as a Circular Treemap." },
            {
                type: "p",
                text: "Circle Packing is a variation of a Treemap that uses circles instead of rectangles. Containment within each circle represents a level in the hierarchy: each branch of the tree is represented as a circle and its sub-branches are represented as circles inside of it. The area of each circle can also be used to represent an additional arbitrary value, such as quantity or file size. Colour may also be used to assign categories or to represent another variable via different shades.",
            },
            {
                type: "p",
                text: "As beautiful as Circle Packing appears, it's not as space-efficient as a Treemap, as there's a lot of empty space within the circles. Despite this, Circle Packing actually reveals hierarchal structure better than a Treemap.",
            },
        ],
        functions: ["Hierarchy", "Proportions"],
        imgName: "circlepacking",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Connection Map",
        descriptions: [
            { type: "p", text: "Also known as a Link Map or Ray Map." },
            { type: "p", text: "Connection Maps are drawn by connecting points placed on a map by straight or curved lines." },
            {
                type: "p",
                text: "While Connection Maps are great for showing connections and relationships geographically, they can also be used to display map routes through a single chain of links. Connection Maps can also be useful in revealing spatial patterns through the distribution of connections or by how concentrated connections are on a map.",
            },
        ],
        functions: ["Distribution", "Location", "Movement", "Patterns", "Relationships"],
        imgName: "connectionmap",
        imgExt: ["png", "svg"],
    },
    {
        type: "Density Plot",
        descriptions: [
            { type: "p", text: "As known as Kernel Density Plots, Density Trace Graph." },
            {
                type: "p",
                text: "A Density Plot visualises the distribution of data over a continuous interval or time period. This chart is a variation of a Histogram that uses kernel smoothing to plot values, allowing for smoother distributions by smoothing out the noise. The peaks of a Density Plot help display where values are concentrated over the interval.",
            },
            {
                type: "p",
                text: "An advantage Density Plots have over Histograms is that they're better at determining the distribution shape because they're not affected by the number of bins used (each bar used in a typical histogram). A Histogram comprising of only 4 bins wouldn't produce a distinguishable enough shape of distribution as a 20-bin Histogram would. However, with Density Plots, this isn't an issue.",
            },
        ],
        functions: ["Distribution", "Patterns"],
        imgName: "densityplot",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Donut Chart",
        descriptions: [
            { type: "p", text: "A donut chart is essentially a Pie Chart with an area of the centre cut out." },
            {
                type: "p",
                text: "Pie Charts are sometimes criticised for focusing readers on the proportional areas of the slices to one another and to the chart as a whole. This makes it tricky to see the differences between slices, especially when you try to compare multiple Pie Charts together.",
            },
            {
                type: "p",
                text: "A Donut Chart somewhat remedies this problem by de-emphasizing the use of the area. Instead, readers focus more on reading the length of the arcs, rather than comparing the proportions between slices.",
            },
            {
                type: "p",
                text: "Also, Donut Charts are more space-efficient than Pie Charts because the blank space inside a Donut Chart can be used to display information inside it.",
            },
        ],
        functions: ["Comparisons", "Part-to-a-whole", "Proportions"],
        imgName: "donutchart",
        imgExt: ["png", "png"],
    },
    {
        type: "Dot Map",
        descriptions: [
            { type: "p", text: "Also known as a Point Map, Dot Distribution Map, Dot Density Map." },
            {
                type: "p",
                text: "Dot Maps are a way of detecting spatial patterns or the distribution of data over a geographical region, by placing equally sized points over a geographical region.",
            },
            {
                type: "p",
                text: "There are two types of Dot Map: one-to-one (one point represents a single count or object) and one-to-many (one point represents a particular unit, e.g. 1 point = 10 trees).",
            },
            {
                type: "p",
                text: "Dot Maps are ideal for seeing how things are distributed over a geographical region and can reveal patterns when the points cluster on the map. Dot Maps are easy to grasp and are better at giving an overview of the data, but are not great for retrieving exact values.",
            },
        ],
        functions: ["Distribution", "Location", "Patterns"],
        imgName: "dotmap",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Dot Matrix Chart",
        descriptions: [
            {
                type: "p",
                text: "Dot Matrix Charts display discreet data in units of dots, each coloured to represent a particular category and grouped together in a matrix. They are used to give a quick overview of the distribution and proportions of each category in a data set and also to compare distribution and proportion across other datasets, in order to discover patterns.",
            },
            {
                type: "p",
                text: "When only one variable/category is used in the dataset and all the dots are the same colour, a Dot Matrix Chart can be used to primarily show proportions.",
            },
        ],
        functions: ["Comparisons", "Distribution", "Patterns", "Proportions"],
        imgName: "dotmatrixchart",
        imgExt: ["png", "png"],
    },
    {
        type: "Error Bars",
        descriptions: [
            {
                type: "p",
                text: "Although not a chart outright, Error Bars function as a graphical enhancement that visualises the variability of the plotted data on a Cartesian graph. Error Bars can be applied to graphs such as Scatterplots, Dot Plots, Bar Charts or Line Graphs, to provide an additional layer of detail on the presented data.",
            },
            {
                type: "p",
                text: "Error Bars help to indicate estimated error or uncertainty to give a general sense of how precise a measurement is. This is done through the use of markers drawn over the original graph and its data points. Typically, Error bars are used to display either the standard deviation, standard error, confidence intervals or the minimum and maximum values in a ranged dataset.",
            },
            {
                type: "p",
                text: "To visualise this information, Error Bars work by drawing cap-tipped lines that extend from the centre of the plotted data point (or edge with Bar Charts). The length of an Error Bar helps reveal the uncertainty of a data point: a short Error Bar shows that values are concentrated, signalling that the plotted average value is more likely, while a long Error Bar would indicate that the values are more spread out and less reliable. Also depending on the type of data, the length of each pair of Error Bars tend to be of equal length on both sides. However, if the data is skewed, then the lengths on each side would be unbalanced.",
            },
            {
                type: "p",
                text: "Error Bars always run parallel to a quantitative scale axis, so they can be displayed either vertically or horizontally, depending on whether the quantitative scale is on the Y or X axis. If there are two quantitative scales, then two pairs of Error Bars can be used for both axes.",
            },
        ],
        functions: ["Ranges"],
        imgName: "errorbars",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Flow Chart",
        descriptions: [
            { type: "p", text: "As known as Flow Diagram, Flow Process Chart, Process Chart, Process Map, Process Model, Work Flow Diagram." },
            {
                type: "p",
                text: "This type of diagram is used to show the sequential steps of a process. Flow Charts map out a process using a series of connected symbols, which makes the process easy to understand and aids in its communication to other people. Flow Charts are useful for explaining how a complex and/or abstract procedure, system, concept or algorithm work. Drawing a Flow Chart can also help in planning and developing a process or improving an existing one.",
            },
            {
                type: "p",
                text: "Symbols are divided up and standardised into different types that each have their own particular shape. Labels for each step are written inside of the symbol shape. Flow Charts begin and end with a curved rectangle to signify the start and finishing of the process. Lines or arrows are used to show the direction of flow from one step in the process to another. Simple instructions or actions are represented by a rectangle. While a diamond shape is used when a decision is needed. There are also many other symbols that can be used in Flow Chart.",
            },
            { type: "p", text: "Flow Charts can run horizontally or vertically." },
        ],
        functions: ["Concepts", "How things work", "Processes & methods"],
        imgName: "flowchart",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Flow Map",
        descriptions: [
            {
                type: "p",
                text: "Flow Maps geographically show the movement of information or objects from one location to another and their amount. Typically Flow Maps are used to show the migration data of people, animals and products. The magnitude or amount of migration in a single flow line is represented by its thickness. This helps to show how migration is distributed geographically.",
            },
            {
                type: "p",
                text: "Flow Maps are drawn from a point of origin and branch out of their flow lines. Arrows can be used to show direction, or if the movement is incoming or outgoing. Drawing flow lines without arrows can be used to represent trade going back-and-forth. Merging/bundling flow lines together and avoiding crossovers can help to reduce visual clutter on the map.",
            },
        ],
        functions: ["Distribution", "Location", "Movement & Flow"],
        imgName: "flowmap",
        imgExt: ["png", "png"],
    },
    {
        type: "Gantt Chart",
        descriptions: [
            {
                type: "p",
                text: "Commonly used as an organisational tool for project management, Gantt Charts display a list of activities (or tasks) with their duration over time, showing when each activity starts and ends. This makes Gantt Charts useful for planning and estimating how long an entire project might take. You can also see what activities are running in parallel to each other.",
            },
            {
                type: "p",
                text: "Gantt Charts are drawn within a table: rows are used for the activities and columns are used as the timescale. The duration of each activity is represented by the length of a bar plotted along this timescale. The start of the bar is the beginning of the activity and the end of the bar is when the activity should finish. Colour-coding the bars can be used to categorise the activities into groups. To show the percentage of completion of an activity, a bar can be partially filled in, shaded differently or use a different colour, to differentiate between what is done and what is left to do.",
            },
            {
                type: "p",
                text: "Connecting arrows can be used to show which tasks are dependent on each other. Critical paths, the key activities required to finish the project can also be displayed with a series of highlighted arrows. Symbols can also be placed within a Gantt Chart to signify milestones and a vertical line running through the chart is used to highlight the current date.",
            },
        ],
        functions: ["Data over time", "Processes & methods", "Ranges", "Reference tool"],
        imgName: "ganttchart",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Heatmap (Matrix)",
        descriptions: [
            {
                type: "p",
                text: "Heatmaps visualise data through variations in colouring. When applied to a tabular format, Heatmaps are useful for cross-examining multivariate data, through placing variables in the rows and columns and colouring the cells within the table. Heatmaps are good for showing variance across multiple variables, revealing any patterns, displaying whether any variables are similar to each other, and for detecting if any correlations exist in-between them.",
            },
            {
                type: "p",
                text: "Typically, all the rows are one category (labels displayed on the left or right side) and all the columns are another category (labels displayed on the top or bottom). The individual rows and columns are divided into the subcategories, which all match up with each other in a matrix. The cells contained within the table either contain colour-coded categorical data or numerical data, that is based on a colour scale. The data contained within a cell is based on the relationship between the two variables in the connecting row and column.",
            },
            {
                type: "p",
                text: "A legend is required alongside a Heatmap in order for it to be successfully read. Categorical data is colour-coded, while numerical data requires a colour scale that blends from one colour to another, in order to represent the difference in high and low values. A selection of solid colours can be used to represent multiple value ranges (0-10, 11-20, 21-30, etc) or you can use a gradient scale for a single range (for example 0 - 100) by blending two or more colours together.",
            },
            {
                type: "p",
                text: "Because of their reliance on colour to communicate values, Heatmaps are a chart better suited to displaying a more generalised view of numerical data, as it's harder to accurately tell the differences between colour shades and to extract specific data points from (unless of course, you include the raw data in the cells).",
            },
            {
                type: "p",
                text: "Heatmaps can also be used to show the changes in data over time if one of the rows or columns are set to time intervals. An example of this would be to use a Heatmap to compare the temperature changes across the year in multiple cities, to see where's the hottest or coldest places. So the rows could list the cities to compare, the columns contain each month and the cells would contain the temperature values.",
            },
        ],
        functions: ["Comparisons", "Data over time", "Patterns", "Relationships"],
        imgName: "heatmap(matrix)",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Histogram",
        descriptions: [
            {
                type: "p",
                text: "A Histogram visualises the distribution of data over a continuous interval or certain time period. Each bar in a histogram represents the tabulated frequency at each interval/bin.",
            },
            {
                type: "p",
                text: "Histograms help give an estimate as to where values are concentrated, what the extremes are and whether there are any gaps or unusual values. They are also useful for giving a rough view of the probability distribution.",
            },
        ],
        functions: ["Comparisons", "Data over Time", "Distribution", "Patterns", "Range"],
        imgName: "histogram",
        imgExt: ["png", "png"],
    },
    {
        type: "Illustration Diagram",
        descriptions: [
            {
                type: "p",
                text: "Illustration Diagrams are graphics that display an image, or images, accompanied by either notes, labels or a legend, in order to:",
            },
            { type: "li", text: "Explain concepts or methods" },
            { type: "li", text: "Describe objects or places" },
            { type: "li", text: "Show how things work, move or change" },
            { type: "li", text: "Help provide additional insight into the subject displayed" },
            {
                type: "p",
                text: "Images used can come in the form of illustrations, rough sketches, wire-frames or photographs. Therefore, images can be either symbolic, pictorial or realistic. Sometimes enlargements and cross-sections are used for more in-depth analysis or displaying more detail.",
            },
        ],
        functions: ["Concepts", "How things work", "Processes & Methods"],
        imgName: "illustrationdiagram",
        imgExt: ["png", "png"],
    },
    {
        type: "Kagi Chart",
        descriptions: [
            {
                type: "p",
                text: "Used to display the general levels of supply and demand of a particular asset by visualising the price actions through a series of line patterns. Kagi Charts are time-independent and help filter out the noise that can occur on other financial charts (like on a Candlestick Chart). This is so that important price movements are displayed more clearly. Recognising the patterns that occur in Kagi Charts is key to understanding them.",
            },
            {
                type: "p",
                text: "While Kagi Charts do display dates or time on their x-axis, these are in fact markers for the key price action dates and are not part of a timescale. The y-axis on the right-hand side is used as the value scale.",
            },
            {
                type: "p",
                text: "The line in a Kagi Chart initially moves vertically in the same direction of the price movement and will continue to extend, so long as the price, regardless of how small, maintains the same direction. Once the price hits a pre-determined reversal amount, the line makes a u-turn and goes in the opposite direction. So, each of the little horizontal lines on the chart indicates where a price reversal has taken place. When a horizontal line joins a rising line with a plunging line it's known as a shoulder, while a horizontal line connecting a plunging line with a rising line is known as a waist.",
            },
            {
                type: "p",
                text: 'The varying thickness or colour of the line is dependent on the price behaviour. When the price goes higher than a previous "shoulder" reversal, the line becomes thicker (and/or green) and is known as a "Yang line". This can be interpreted as an increase in demand over supply for the asset and as a bullish upward trend. Alternatively, when the price breaks below a previous "waist" reversal, the line becomes thinner (and/or red) and is known as a "Yin line". This signifies an increase in supply over demand for the asset and as a bearish downward price trend.',
            },
            {
                type: "p",
                text: "Traders use the shift from thin (Yin) to thick (Yang) lines (and vice versa) as signals to buy or sell an asset. A Yin to Yang shift indicates to buy, while a Yang to Yin shift indicates to sell.",
            },
        ],
        functions: ["Patterns", "Ranges"],
        imgName: "kagichart",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Line Chart",
        descriptions: [
            {
                type: "p",
                text: "Line Graphs are used to display quantitative values over a continuous interval or time period. A Line Graph is most frequently used to show trends and analyse how the data has changed over time.",
            },
            {
                type: "p",
                text: "Line Graphs are drawn by first plotting data points on a Cartesian coordinate grid, then connecting a line between all of these points. Typically, the y-axis has a quantitative value, while the x-axis is a timescale or a sequence of intervals. Negative values can be displayed below the x-axis.",
            },
            {
                type: "p",
                text: "The direction of the lines on the graph works as a nice metaphor for the data: an upward slope indicates where values have increased and a downward slope indicates where values have decreased. The line's journey across the graph can create patterns that reveal trends in a dataset.",
            },
            {
                type: "p",
                text: "When grouped with other lines (other data series), individual lines can be compared to one another. However, avoid using more than 3-4 lines per graph, as this makes the chart more cluttered and harder to read. A solution to this is to divide the chart into smaller multiples (have a small Line Graph for each data series).",
            },
        ],
        functions: ["Patterns", "Data over time", "Comparisons"],
        imgName: "linegraph",
        imgExt: ["png", "png"],
    },
    {
        type: "Marimekko Chart",
        descriptions: [
            { type: "p", text: "Also known as a Mosaic Plot." },
            {
                type: "p",
                text: "Marimekko Charts are used to visualise categorical data over a pair of variables. In a Marimekko Chart, both axes are variable with a percentage scale, that determines both the width and height of each segment. So Marimekko Charts work as a kind of two-way 100% Stacked Bar Graph. This makes it possible to detect relationships between categories and their subcategories via the two axes.",
            },
            {
                type: "p",
                text: "The main flaws of Marimekko Charts are that they can be hard to read, especially when there are many segments. Also, it's hard to accurately make comparisons between each segment, as they are not all arranged next to each other along a common baseline. Therefore, Marimekko Charts are better suited for giving a more general overview of the data.",
            },
        ],
        functions: ["Comparisons", "Part-to-a-whole", "Proportions", "Relationships"],
        imgName: "marimekkochart",
        imgExt: ["png", "png"],
    },
    {
        type: "Multi-set Bar Chart",
        descriptions: [
            { type: "p", text: "Also known as a Grouped Bar Chart or Clustered Bar Chart." },
            {
                type: "p",
                text: "This variation of a Bar Chart is used when two or more data series are plotted side-by-side and grouped together under categories, all on the same axis.",
            },
            {
                type: "p",
                text: "Like a Bar Chart, the length of each bar is used to show discrete, numerical comparisons amongst categories. Each data series is assigned an individual colour or a varying shade of the same colour, in order to distinguish them. Each group of bars are then spaced apart from each other.",
            },
            {
                type: "p",
                text: "The use of Multi-set Bar Charts is usually to compare grouped variables or categories to other groups with those same variables or category types. Multi-set Bar Charts can also be used to compare mini Histograms to each other, so each bar in the group would represent the significant intervals of a variable.",
            },
            { type: "p", text: "The downside of Multi-set Bar Charts is that they become harder to read the more bars you have in one group." },
        ],
        functions: ["Comparisons", "Distribution", "Patterns", "Relationships"],
        imgName: "multi-setbarchart",
        imgExt: ["png", "png"],
    },
    {
        type: "Network Diagram",
        descriptions: [
            { type: "p", text: "Also known as Network Graph, Network Map, Node-Link Diagram." },
            {
                type: "p",
                text: "This type of visualisation shows how things are interconnected through the use of nodes / vertices and link lines to represent their connections and help illuminate the type of relationships between a group of entities.",
            },
            {
                type: "p",
                text: "Typically, nodes are drawn as little dots or circles, but icons can also be used. Links are usually displayed as simple lines connected between the nodes. However, in some Network Diagrams, not all of the nodes and links are created equally: additional variables can be visualised, for example, by making the node size or link stroke weight proportion to an assigned value.",
            },
            {
                type: "p",
                text: "By mapping out connected systems, Network Diagrams can be used to interpret the structure of a network through looking for any clustering of the nodes, how densely nodes are connected or by how the diagram layout is arranged.",
            },
            {
                type: "p",
                text: 'The two notable types of Network Diagram are "undirected" and "directed". Undirected Network Diagrams only display the connections between entities, while directed Network Diagrams show if the connections are one-way or two-way through small arrows.',
            },
            {
                type: "p",
                text: 'Network Diagrams have a limited data capacity and start to become hard to read when there are too many nodes and resemble "hairballs".',
            },
        ],
        functions: ["Relationships"],
        imgName: "networkdiagram",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Nightingale Rose Chart",
        descriptions: [
            { type: "p", text: "Also known as a Coxcomb Chart, Polar Area Diagram." },
            {
                type: "p",
                text: "This chart was famously used by statistician and medical reformer, Florence Nightingale to communicate the avoidable deaths of soldiers during the Crimean war.",
            },
            {
                type: "p",
                text: "Nightingale Rose Charts are drawn on a polar coordinate grid. Each category or interval in the data is divided into equal segments on this radial chart. How far each segment extends from the centre of the polar axis depends on the value it represents. So each ring from the centre of the polar grid can be used as a scale to plot the segment size and represent a higher value. Therefore, it's important to notice with Nightingale Rose Charts that it's the area, rather than the radius of a segment that represents its value.",
            },
            {
                type: "p",
                text: "The major flaw with Nightingale Rose Charts is that the outer segments are given more emphasis because of their larger area size. This disproportionately represents increases in value.",
            },
        ],
        functions: ["Comparisons", "Data over time", "Proportions"],
        imgName: "nightingalerosechart",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Non-ribbon Chord Diagram",
        descriptions: [
            {
                type: "p",
                text: "A Non-ribbon Chord Diagram is a stripped-down version of a Chord Diagram, with only the nodes and connection lines showing. This provides more emphasis on the connections within the data.",
            },
        ],
        functions: ["Relationships"],
        imgName: "non-ribbonchorddiagram",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Open-high-low-close Chart",
        descriptions: [
            { type: "p", text: "Also known as OHLC Chart, Price Chart, Bar Chart." },
            {
                type: "p",
                text: "Open-high-low-close Charts (or OHLC Charts) are used as a trading tool to visualise and analyse the price changes over time for securities, currencies, stocks, bonds, commodities, etc. OHLC Charts are useful for interpreting the day-to-day sentiment of the market and forecasting any future price changes through the patterns produced.",
            },
            {
                type: "p",
                text: "The y-axis on an OHLC Chart is used for the price scale, while the x-axis is the timescale. On each single time period, an OHLC Charts plots a symbol that represents two ranges: the highest and lowest prices traded, and also the opening and closing price on that single time period (for example in a day). On the range symbol, the high and low price ranges are represented by the length of the main vertical line. The open and close prices are represented by the vertical positioning of tick-marks that appear on the left (representing the open price) and on right (representing the close price) sides of the high-low vertical line.",
            },
            {
                type: "p",
                text: 'Colour can be assigned to each OHLC Chart symbol, to distinguish whether the market is "bullish" (the closing price is higher than it opened) or "bearish" (the closing price is lower than it opened).',
            },
        ],
        functions: ["Data over time", "Patterns", "Ranges"],
        imgName: "open-high-low-closechart",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Parallel Coordinate Chart",
        descriptions: [
            {
                type: "p",
                text: "This type of visualisation is used for plotting multivariate, numerical data. Parallel Coordinates Plots are ideal for comparing many variables together and seeing the relationships between them. For example, if you had to compare an array of products with the same attributes (comparing computer or cars specs across different models).",
            },
            {
                type: "p",
                text: "In a Parallel Coordinates Plot, each variable is given its own axis and all the axes are placed in parallel to each other. Each axis can have a different scale, as each variable works off a different unit of measurement, or all the axes can be normalised to keep all the scales uniform. Values are plotted as a series of lines that connected across all the axes. This means that each line is a collection of points placed on each axis, that have all been connected together.",
            },
            {
                type: "p",
                text: "The order the axes are arranged in can impact the way how the reader understands the data. One reason for this is that the relationships between adjacent variables are easier to perceive, then for non-adjacent variables. So re-ordering the axes can help in discovering patterns or correlations across variables.",
            },
            {
                type: "p",
                text: "The downside to Parallel Coordinates Plots, is that they can become over-cluttered and therefore, illegible when they are very data-dense. The best way to remedy this problem is through interactivity and a technique known as Brushing. Brushing highlights a selected line or collection of lines while fading out all the others. This allows you to isolate sections of the plot you are interested in while filtering out the noise.",
            },
        ],
        functions: ["Comparisons", "Relationships", "Patterns"],
        imgName: "parallelcoordinatesplot",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Parallel Sets",
        descriptions: [
            {
                type: "p",
                text: "Parallel Set charts are similar to Sankey Diagrams in the way they show flow and proportions. However, Parallel Sets don't use arrows and they divide the flow-path at each displayed line-set.",
            },
            {
                type: "p",
                text: "Each line-set corresponds to a dimension/dataset, which its values/categories are represented in each line divide in that line-set. The width of each line and the flow-path that stems from it is determined by the proportional fraction of the category total. Each flow-path can be coloured to show and compare the distribution between different categories.",
            },
            { type: "p", text: "- - -" },
            { type: "p", text: "The development process of Parallel Sets can be found in Robert Kosara's papers:" },
            { type: "p", text: "Turning a Table into a Tree: Growing Parallel Sets into a Purposeful Project" },
            { type: "p", text: "Parallel Sets: Interactive Exploration and Visual Analysis of Categorical Data" },
        ],
        functions: ["Comparisons", "Distribution", "Flow", "Processes & Methods", "Proportions"],
        imgName: "parallelsets",
        imgExt: ["png", "png"],
    },
    {
        type: "Pictogram Chart",
        descriptions: [
            { type: "p", text: "Also known as Pictograph Chart, Pictorial Chart, Pictorial Unit Chart, Picture Graph." },
            {
                type: "p",
                text: "Pictogram Charts use icons to give a more engaging overall view of small sets of discrete data. Typically, the icons represent the data's subject or category, for example, data on population would use icons of people. Each icon can represent one unit or any number of units (e.g. each icon represents 10). Data sets are compared side-by-side in either columns or rows of icons, to compare each category to one another.",
            },
            {
                type: "p",
                text: "The use of icons can sometimes help overcome differences in language, culture and education. Icons can also give a more representational view of the data. So for example, if your data is of 5 cars, you show 5 icons of cars in the chart.",
            },
            { type: "p", text: "Two things to avoid when using Pictogram Charts are:" },
            { type: "li", text: "Using them for large data sets, which makes values on the chart hard to count." },
            { type: "li", text: "Displaying partial icons, as this can add confusion to what they represent." },
        ],
        functions: ["Comparisons", "Distribution"],
        imgName: "pictogramchart",
        imgExt: ["png", "png"],
    },
    {
        type: "Pie Chart",
        descriptions: [
            {
                type: "p",
                text: "Extensively used in presentations and offices, Pie Charts help show proportions and percentages between categories, by dividing a circle into proportional segments. Each arc length represents a proportion of each category, while the full circle represents the total sum of all the data, equal to 100%.",
            },
            {
                type: "p",
                text: "Pie Charts are ideal for giving the reader a quick idea of the proportional distribution of the data. However the major downsides to pie charts are:",
            },
            {
                type: "li",
                text: "They cannot show more than a few values, because as the number of values shown increases, the size of each segment/slice becomes smaller. This makes them unsuitable for large amounts of data.",
            },
            {
                type: "li",
                text: "They take up more space than their alternatives, like a 100% Stacked Bar Chart for example. Mainly due to their size and for the usual need for a legend.",
            },
            {
                type: "li",
                text: "They are not great for making accurate comparisons between groups of Pie Charts. This being that it is harder to distinguish the size of items via area when it is for length.",
            },
            {
                type: "p",
                text: "In spite of that, comparing a given category (one slice) within the total of a single Pie Chart, then it can often be more effective.",
            },
        ],
        functions: ["Comparisons", "Part-to-a-whole", "Proportions"],
        imgName: "piecharts",
        imgExt: ["png", "png"],
    },
    {
        type: "Point & Figure Chart",
        descriptions: [
            { type: "p", text: "Also known as a P&F Chart." },
            {
                type: "p",
                text: "This chart is used to display the relationship between supply and demand of a particular asset through a series of columns made up of X's and O's. Point & Figure Charts are time-independent and focus primarily on an asset's filtered price actions. Point & Figure Charts do not plot the volume traded and their purpose is to indicate any supply and demand relationship changes, which are known as \"breakouts\". Point & Figure Charts also make it easier to detect support and resistance levels, and any trends lines that may exist. Recognising the patterns that occur in Point & Figure Charts is key to utilising them.",
            },
            {
                type: "p",
                text: "While Point & Figure Charts do display dates or time on their x-axis, these are in-fact markers for the key price action dates and are not part of a time-scale. The y-axis is used as the value scale. The Xs represent rising prices, where demand overtakes supply (more buyers) and the Os represent falling prices, where supply overtakes demand (more sellers).",
            },
            {
                type: "p",
                text: "Before drawing a Point & Figure Chart, you first need to decide on the values you want to set for the box size and the reversal amount. You also need to choose, from what time point you want to take the price changes from: this could be the day's closing price or it could be the day's high or low depending on the direction of the previous column.",
            },
            {
                type: "p",
                text: "The box size determines how much the price needs to change before a new X or O symbol can be placed. This sets how much noise in the market you want to filter out of the chart by reducing the amount of minute price fluctuations displayed. So for example, if you set the box size to $1, any price increases or decreases less then this amount will be ignored, but if the price change is equal to or over $1, then a symbol will be placed on the chart.",
            },
            {
                type: "p",
                text: "These price changes are kept in one direction (either rising or falling) within a single column, and a single column can only contain either Xs or Os, not both. So if the price is on a rising uptrend (with Xs) then only Xs will be plotted in a column (this includes both price increases and decreases). It's only once the predetermined reversal amount is hit that a new column can be started. So if you had a column of Xs and your reversal amount is $3, if a price drop of $3 or more occurs then you need to start a new column of Os to indicate that the direction of the market has changed into a declining trend. Same thing with a column of Os, if the price increase of $3, then the trend has reversed from falling to rising, and you can now plot on a new column.",
            },
            {
                type: "p",
                text: "The reversal amount affects the sensitivity of the chart: a smaller reversal amount would yield more price fluctuations, making the chart wider and providing more information what has occurred in the markets. However, a larger reversal amount would filter out insignificant price fluctuations, condensing the chart.",
            },
            {
                type: "p",
                text: "Numbers are sometimes also displayed in columns to indicate the start of a new month. 1-9 are used to denote January (1) through to September (9) and A, B and C used for October (A), November (B) and December (C).",
            },
        ],
        functions: ["Patterns"],
        imgName: "point&figurechart",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Population Pyramid",
        descriptions: [
            { type: "p", text: "As known as an Age & Sex Pyramid." },
            {
                type: "p",
                text: "A Population Pyramid is a pair of back-to-back Histograms (for each sex) that displays the distribution of a population in all age groups and in both sexes. The X-axis is used to plot population numbers and the Y-axis lists all age groups.",
            },
            {
                type: "p",
                text: "Population Pyramids are ideal for detecting changes or differences in population patterns. Multiple Population Pyramids can be used to compare patterns across nations or selected population groups.",
            },
            {
                type: "p",
                text: "The shape of a Population Pyramid can be used to interpret a population. For example, a pyramid with a very wide base and a narrow top section suggests a population with both high fertility and death rates. Whereas, a pyramid with a wider top half and a narrower base would suggest an ageing population with low fertility rates.",
            },
            {
                type: "p",
                text: "Population Pyramids can also be used to speculate a population's future development. An ageing population that is not reproducing would eventually run into issues such as having enough offspring to care for the elderly. Other theories such as the Youth Bulge state that when there's a wide bulge around the 16-30 age range, particularly in males, this leads to social unrest, war and terrorism.",
            },
            { type: "p", text: "This makes Population Pyramids useful for fields such as Ecology, Sociology and Economics." },
        ],
        functions: ["Comparisons", "Distribution", "Patterns"],
        imgName: "populationpyramid",
        imgExt: ["png", "png"],
    },
    {
        type: "Proportional Area Chart",
        descriptions: [
            {
                type: "p",
                text: "Great for comparing values and showing proportions (in sizes, quantities etc) to give a quick, overall view of the relative sizes of the data, without the use of scales. The downside to this chart is that it's difficult to estimate values using Proportional Area Charts. This means they're almost exclusively used for communication purposes instead of analytical ones.",
            },
            {
                type: "p",
                text: "Proportional Area Charts usually use squares or circles. However, any shape can be used, so long as you use the shape's area to represent the data. A common technical error with area charts is to use one length to determine the shape's size, when in fact you need to calculate the space inside the shape to determine its size. Otherwise, you will cause exponential increases and decreases.",
            },
        ],
        functions: ["Comparisons", "Proportions"],
        imgName: "proportionalareachart",
        imgExt: ["png", "png"],
    },
    {
        type: "Radar Chart",
        descriptions: [
            { type: "p", text: "As known as: Spider Chart, Web Chart, Polar Chart, Star Plots." },
            {
                type: "p",
                text: "Radar Charts are a way of comparing multiple quantitative variables. This makes them useful for seeing which variables have similar values or if there are any outliers amongst each variable. Radar Charts are also useful for seeing which variables are scoring high or low within a dataset, making them ideal for displaying performance.",
            },
            {
                type: "p",
                text: "Each variable is provided with an axis that starts from the centre. All axes are arranged radially, with equal distances between each other, while maintaining the same scale between all axes. Grid lines that connect from axis-to-axis are often used as a guide. Each variable value is plotted along its individual axis and all the variables in a dataset and connected together to form a polygon.",
            },
            { type: "p", text: "However, there are some major flaws with Radar Charts:" },
            {
                type: "p",
                text: "Having multiple polygons in one Radar Chart makes it hard to read, confusing and too cluttered. Especially if the polygons are filled in, as the top polygon covers all the other polygons underneath it.",
            },
            {
                type: "p",
                text: "Having too many variables creates too many axes and can also make the chart hard to read and complicated. So it's good practice to keep Radar Charts simple and limit the number of variables used.",
            },
            {
                type: "p",
                text: "Another flaw with Radar Charts is that they're not so good for comparing values across each variable. Even with the aid of the spiderweb-like grid guide. Comparing values all on a single straight axis is much easier.",
            },
        ],
        functions: ["Comparisons", "Relationships", "Patterns"],
        imgName: "radarchart",
        imgExt: ["png", "png"],
    },
    {
        type: "Radial Bar Chart",
        descriptions: [
            {
                type: "p",
                text: "A Radial/Circular Bar Chart is simply a Bar Chart plotted on a polar coordinate system, rather than on a Cartesian one.",
            },
            {
                type: "p",
                text: "While they look cool, the problem with Radial Bar Charts is that the bar lengths can be misinterpreted. Each bar on the outside gets relatively longer to the last, even if they represent the same value. This is because each bar has to be at a different radii, so each bar is judged by its angle. Our visual systems are better at interpreting straight lines, so the Cartesian bar chart is a better choice for comparing values. Therefore, Radial Bar Charts are used primarily for aesthetic reasons.",
            },
        ],
        functions: ["Comparisons"],
        imgName: "radialbarchart",
        imgExt: ["png", "png"],
    },
    {
        type: "Radial Column Chart",
        descriptions: [
            { type: "p", text: "Also known as a Circular Column Graph or Star Graph." },
            {
                type: "p",
                text: "This type of graph uses a grid of concentric circles to plot bars on. Each circle on the graph represents a value on a scale, while the radial dividers (lines spanning from the centre) are used for each category or interval (if a histogram).",
            },
            {
                type: "p",
                text: "Typically, the lower values on the scale start from the centre and increase with each circle. However, negative values can also be displayed on a Radial Column Chart, by having zero starting from any of the outer circles (from the central one) and all circles within it used for negative values.",
            },
            {
                type: "p",
                text: "The bars normally start from the centre and extend outwards, however ranges can be shown with variable starting points, like in a Span Chart. Bars can also be stacked in the same way a Stacked Bar Graph is.",
            },
        ],
        functions: ["Comparisons"],
        imgName: "radialcolumnchart",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Sankey Diagram",
        descriptions: [
            {
                type: "p",
                text: "Sankey Diagrams display flows and their quantities in proportion to one another. The width of the arrows or lines are used to show their magnitudes, so the bigger the arrow, the larger the quantity of flow. Flow arrows or lines can combine together or split through their paths on each stage of a process. Colour can be used to divide the diagram into different categories or to show the transition from one state of the process to another.",
            },
            {
                type: "p",
                text: "Typically, Sankey Diagrams are used to visually show the transfer of energy, money or materials, but they can be used to show the flow of any isolated system process.",
            },
        ],
        functions: ["How things work", "Flow", "Process", "Proportions"],
        imgName: "sankeydiagram",
        imgExt: ["png", "png"],
    },
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
        imgName: "scatterplot",
        imgExt: ["png", "png"],
    },
    {
        type: "Span Chart",
        descriptions: [
            { type: "p", text: "Also known as a Range Bar/Column Graph, Floating Bar Graph, Difference Graph, High-Low Graph." },
            {
                type: "p",
                text: "A chart used to display dataset ranges between a minimum value and a maximum value. Span Charts are ideal for comparing ranges, typically for categorised ranges.",
            },
            {
                type: "p",
                text: "Span Charts focus the reader on only the extreme values and give no information on the values in between the minimum and maximum values or on averages or data distribution.",
            },
        ],
        functions: ["Comparisons", "Ranges"],
        imgName: "spanchart",
        imgExt: ["png", "png"],
    },
    {
        type: "Spiral Plot",
        descriptions: [
            { type: "p", text: "Also known as a Time Series Spiral." },
            {
                type: "p",
                text: "This type of visualisation plots time-based data along an Archimedean spiral. The graph begins at the centre of a spiral and then progresses outwards. Spiral Plots are versatile and can use bars, lines or points to be displayed along the spiral path.",
            },
            {
                type: "p",
                text: "Spiral Plots are ideal for showing large data sets, usually to show trends over a large time period. This makes Spiral Plots great for displaying periodic patterns. Colour can be assigned to each period to break them up and to allow some comparison between each period. So for example, if we were to show data over a year, we could assign a colour for each month on the graph.",
            },
            { type: "p", text: "- - -" },
            { type: "p", text: "Papers on the development of Spiral Plots:" },
            { type: "p", text: "Interactive Visualization of Serial Periodic Data - John V. Carlis and Joseph A. Konstan (1998)" },
            { type: "p", text: "Visualizing Time-Series on Spirals, Marc Weber, Marc Alexa and Wolfgang M&uumlller (2001)" },
        ],
        functions: ["Data over time", "Patterns"],
        imgName: "spiralplot",
        imgExt: ["png", "png"],
    },
    {
        type: "Stacked Area Graph",
        descriptions: [
            {
                type: "p",
                text: "Stacked Area Graphs work in the same way as simple Area Graphs do, except for the use of multiple data series that start each point from the point left by the previous data series.",
            },
            {
                type: "p",
                text: "The entire graph represents the total of all the data plotted. Stacked Area Graphs also use the areas to convey whole numbers, so they do not work for negative values. Overall, they are useful for comparing multiple variables changing over an interval.",
            },
        ],
        functions: ["Comparisons", "Data over time", "Patterns"],
        imgName: "stackedareagraph",
        imgExt: ["png", "png"],
    },
    {
        type: "Stacked Bar Graph",
        descriptions: [
            {
                type: "p",
                text: "Unlike a Multi-set Bar Graph which displays their bars side-by-side, Stacked Bar Graphs segment their bars. Stacked Bar Graphs are used to show how a larger category is divided into smaller categories and what the relationship of each part has on the total amount. There are two types of Stacked Bar Graphs:",
            },
            {
                type: "p",
                text: "Simple Stacked Bar Graphs place each value for the segment after the previous one. The total value of the bar is all the segment values added together. Ideal for comparing the total amounts across each group/segmented bar.",
            },
            {
                type: "p",
                text: "100% Stack Bar Graphs show the percentage-of-the-whole of each group and are plotted by the percentage of each value to the total amount in each group. This makes it easier to see the relative differences between quantities in each group.",
            },
            {
                type: "p",
                text: "One major flaw of Stacked Bar Graphs is that they become harder to read the more segments each bar has. Also comparing each segment to each other is difficult, as they're not aligned on a common baseline.",
            },
        ],
        functions: ["Comparisons", "Proportions", "Part-to-a-whole"],
        imgName: "stackedbargraph",
        imgExt: ["png", "png"],
    },
    {
        type: "Stem and Leaf Plot",
        descriptions: [
            { type: "p", text: "As known as a Stemplot, Stem & Leaf Display." },
            {
                type: "p",
                text: 'Stem & Leaf Plots are a way of organising data via their place value to show the distribution of data. Place values are shown ascending downwards on a "stem" column, typically but not always in tens. Data that is within each place value is listed and extends sideways from it as a "leaf".',
            },
            {
                type: "p",
                text: "So in a dataset of (4,11,2,20,17,23) the data would be arranged based on their 10's digit but have only their 1's digit displayed:",
            },
            { type: "p", text: "0 - 2, 4\n10 - 1, 7\n20 - 0, 3" },
            {
                type: "p",
                text: "As well as giving readers a quick overview of the data distribution, Stem & Leaf Plots are useful for highlighting outliers and finding the mode. Displaying the data (mostly) raw makes Stem & Leaf Plots useful as a reference tool, such as a public transport schedule. If you have two datasets, then a back-to-back or double Stem & Leaf Plot can be used to compare the two datasets together.",
            },
            {
                type: "p",
                text: "In terms of weaknesses, Stem & Leaf Plots are limited in the size of dataset they can handle. Too little and they become pointless, too much and the chart becomes over-cluttered.",
            },
        ],
        functions: ["Distribution", "Reference Tool"],
        imgName: "stemandleafplot",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Stream Graph",
        descriptions: [
            { type: "p", text: "Also known as a ThemeRiver." },
            {
                type: "p",
                text: "This type of visualisation is a variation of a Stacked Area Graph, but instead of plotting values against a fixed, straight axis, a Stream Graph has values displaced around a varying central baseline. Stream Graphs display the changes in data over time of different categories through the use of flowing, organic shapes that somewhat resemble a river-like stream. This makes Stream Graphs aesthetically pleasing and more engaging to look at.",
            },
            {
                type: "p",
                text: "In a Stream Graph, the size of each individual stream shape is proportional to the values in each category. The axis that a Stream Graph flows parallel to, is used for the timescale. Colour can be used to either distinguish each category or to visualise each category's additional quantitative values through varying the colour shade.",
            },
            {
                type: "p",
                text: "Stream Graphs are ideal for displaying high-volume datasets, in order to discover trends and patterns over time across a wide range of categories. For example, seasonal peaks and troughs in the stream shape can suggest a periodic pattern. A Stream Graph could also be used to visualise the volatility for a large group of assets over a certain period of time.",
            },
            {
                type: "p",
                text: "The downside to Stream Graphs is that they suffer from legibility issues, as they are often very cluttered with large datasets. The categories with smaller values are often drowned out to make way for categories with much larger values, making it impossible to see all the data. Also, it's impossible to read the exact values visualised in a Stream Graph, as there is no axis to use as a reference.",
            },
            {
                type: "p",
                text: "Therefore, Stream Graphs should be reserved to audiences who don't intended to spend much time deciphering the graph and exploring its data. Stream Graphs are better for giving a more general view of the data. They also tend to work significantly better as an interactive piece rather than a static or printed graphics.",
            },
        ],
        functions: ["Data over time", "Patterns"],
        imgName: "streamgraph",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Sunburst Diagram",
        descriptions: [
            { type: "p", text: "As known as a Sunburst Chart, Ring Chart, Multi-level Pie Chart, Belt Chart, Radial Treemap." },
            {
                type: "p",
                text: "This type of visualisation shows hierarchy through a series of rings, that are sliced for each category node. Each ring corresponds to a level in the hierarchy, with the central circle representing the root node and the hierarchy moving outwards from it.",
            },
            {
                type: "p",
                text: "Rings are sliced up and divided based on their hierarchical relationship to the parent slice. The angle of each slice is either divided equally under its parent node or can be made proportional to a value.",
            },
            { type: "p", text: "Colour can be used to highlight hierarchal groupings or specific categories." },
        ],
        functions: ["Hierarchy", "Part-to-a-whole"],
        imgName: "sunburstdiagram",
        imgExt: ["png", "png"],
    },
    {
        type: "Tally Chart",
        descriptions: [
            {
                type: "p",
                text: "A Tally Chart is both a tool for recording and graphically showing the frequency of the distribution of data by using the tally mark numeral system.",
            },
            {
                type: "p",
                text: "When constructing tally charts, categories, values or intervals are placed in one axis or column (typically the Y-axis or first column on the left). Each time when a value of them occurs, a tally mark is added to the chart in the appropriate column or row. When all the data is collected, the tallies are counted up and displayed in total in the next column or row. The final result is similar to that of a histogram.",
            },
        ],
        functions: ["Comparisons", "Distribution"],
        imgName: "tallychart",
        imgExt: ["png", "png"],
    },
    {
        type: "Timeline",
        descriptions: [
            {
                type: "p",
                text: "A Timeline is a graphical way of displaying a list of events in chronological order. Some Timelines work on a scale, while others simply display events in sequence.",
            },
            {
                type: "p",
                text: "The main function of Timelines is to communicate time-related information, either for analysis or to visually present a story or view of history.",
            },
            {
                type: "p",
                text: "If scale-based, a Timeline allows you to see when things occur or are to occur, by allowing the viewer to assess the time intervals between events. This allows the viewer to see any patterns appearing over any selected time periods or how events are distributed that time period.",
            },
            {
                type: "p",
                text: "Other forms of data visualisation can be combined with a Timeline to show how quantitative data changes over time. For example, the bars of a Span Chart could be used to show the duration of events. Here is a blog post showcasing a list of Timeline combinations.",
            },
            { type: "p", text: "When scaled:" },
        ],
        functions: ["Data over time", "Distribution", "Patterns"],
        imgName: "timeline",
        imgExt: ["png", "png"],
    },
    {
        type: "Timetable",
        descriptions: [
            {
                type: "p",
                text: "Timetables are used as a referencing and management tool for scheduled events, tasks and actions to take place.",
            },
            {
                type: "p",
                text: "Organising the data with a table into chronological and/or alphabetical order helps users for quicker referencing.",
            },
            {
                type: "p",
                text: "Timetables are commonly used to display the arrival and departure time of trains and other forms of transportation.",
            },
        ],
        functions: ["Data over time", "Reference Tool"],
        imgName: "timetable",
        imgExt: ["png", "png"],
    },
    {
        type: "Tree Diagram",
        descriptions: [
            { type: "p", text: "Also known as a Organisational chart, Linkage Tree." },
            {
                type: "p",
                text: "A Tree Diagram is a way of visually representing hierarchy in a tree-like structure. Typically the structure of a Tree Diagram consists of elements such as a root node, a member that has no superior/parent. Then there are the nodes, which are linked together with line connections called branches that represent the relationships and connections between the members. Finally, the leaf nodes (or end-nodes) are members who have no children or child nodes.",
            },
            { type: "p", text: "Tree Diagrams are often used:" },
            { type: "li", text: "To show family relations and descent." },
            { type: "li", text: "In taxonomy, the practice and science of classification." },
            { type: "li", text: "In evolutionary science, to show the origin of species." },
            { type: "li", text: "In computer science and mathematics." },
            { type: "li", text: "In businesses and organisations for managerial purposes." },
        ],
        functions: ["Hierarchy", "Reference Tool", "Relationships"],
        imgName: "treediagram",
        imgExt: ["png", "png"],
    },
    {
        type: "Treemap",
        descriptions: [
            {
                type: "p",
                text: "Treemaps are an alternative way of visualising the hierarchical structure of a Tree Diagram while also displaying quantities for each category via area size. Each category is assigned a rectangle area with their subcategory rectangles nested inside of it.",
            },
            {
                type: "p",
                text: "When a quantity is assigned to a category, its area size is displayed in proportion to that quantity and to the other quantities within the same parent category in a part-to-whole relationship. Also, the area size of the parent category is the total of its subcategories. If no quantity is assigned to a subcategory, then it's area is divided equally amongst the other subcategories within its parent category.",
            },
            {
                type: "p",
                text: 'The way rectangles are divided and ordered into sub-rectangles is dependent on the tiling algorithm used. Many tiling algorithms have been developed, but the "squarified algorithm" which keeps each rectangle as square as possible is the one commonly used.',
            },
            {
                type: "p",
                text: "Ben Shneiderman originally developed Treemaps as a way of visualising a vast file directory on a computer, without taking up too much space on the screen. This makes Treemaps a more compact and space-efficient option for displaying hierarchies, that gives a quick overview of the structure. Treemaps are also great at comparing the proportions between categories via their area size.",
            },
            {
                type: "p",
                text: "The downside to a Treemap is that it doesn't show the hierarchal levels as clearly as other charts that visualise hierarchal data (such as a Tree Diagram or Sunburst Diagram).",
            },
        ],
        functions: ["Comparisons", "Hierarchy", "Part-to-a-whole", "Proportions"],
        imgName: "treemap",
        imgExt: ["png", "png"],
    },
    {
        type: "Venn Diagram",
        descriptions: [
            { type: "p", text: "Also known as a Set Diagram." },
            {
                type: "p",
                text: "A Venn Diagram is a diagram that visually displays all the possible logical relationships between a collection of sets. Each set is typically represented with a circle.",
            },
            {
                type: "p",
                text: "Contained within each set is a collection of objects or entities that all have something in common. When sets overlap, it's known as the intersection area. This is where entities that have all the qualities of the overlapping sets.",
            },
            {
                type: "p",
                text: "The example on this page is of a 2-set Venn Diagram. However, there are also 3, 4, 5, 6 and even 7-set Venn Diagrams that exist, which display a more complex geometry between sets.",
            },
        ],
        functions: ["Comparisons", "Concepts", "Relationships"],
        imgName: "venndiagram",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Violin Plot",
        descriptions: [
            { type: "p", text: "A Violin Plot is used to visualise the distribution of the data and its probability density." },
            {
                type: "p",
                text: "This chart is a combination of a Box Plot and a Density Plot that is rotated and placed on each side, to show the distribution shape of the data. The white dot in the middle is the median value and the thick black bar in the centre represents the interquartile range. The thin black line extended from it represents the upper (max) and lower (min) adjacent values in the data. Sometimes the graph marker is clipped from the end of this line.",
            },
            {
                type: "p",
                text: "Box Plots are limited in their display of the data, as their visual simplicity tends to hide significant details about how values in the data are distributed. For example, with Box Plots, you can't see if the distribution is bimodal or multimodal. While Violin Plots display more information, they can be noisier than a Box Plot.",
            },
        ],
        functions: ["Distribution", "Patterns", "Ranges"],
        imgName: "violinplot",
        imgExt: ["svg", "svg"],
    },
    {
        type: "Word Cloud",
        descriptions: [
            { type: "p", text: "Also known as aTag Cloud." },
            {
                type: "p",
                text: "A visualisation method that displays how frequently words appear in a given body of text, by making the size of each word proportional to its frequency. All the words are then arranged in a cluster or cloud of words. Alternatively, the words can also be arranged in any format: horizontal lines, columns or within a shape.",
            },
            {
                type: "p",
                text: "Word Clouds can also be used to display words that have meta-data assigned to them. For example, in a Word Cloud with all the World's country's names, the population could be assigned to each name to determine its size.",
            },
            {
                type: "p",
                text: "Colour used on Word Clouds is usually meaningless and is primarily aesthetic, but it can be used to categorise words or to display another data variable.",
            },
            {
                type: "p",
                text: "Typically, Word Clouds are used on websites or blogs to depict keyword or tag usage. Word Clouds can also be used to compare two different bodies of text together.",
            },
            { type: "p", text: "Although being simple and easy to understand, Word Clouds have some major flaws:" },
            { type: "li", text: "Long words are emphasised over short words." },
            { type: "li", text: "Words whose letters contain many ascenders and descenders may receive more attention." },
            { type: "li", text: "They're not great for analytical accuracy, so used more for aesthetic reasons instead." },
        ],
        functions: ["Analysing Text", "Distribution / Frequency", "Proportions"],
        imgName: "wordcloud",
        imgExt: ["png", "png"],
    },
];
