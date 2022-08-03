/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                76: "19rem",
                120: "30rem",
                176: "44rem",
                220: "55rem",
            },
            borderWidth: {
                1: "1px",
                0: "0",
                2: "2px",
                3: "3px",
                4: "4px",
                6: "6px",
                8: "8px",
            },
        },
    },
    plugins: [],
};
