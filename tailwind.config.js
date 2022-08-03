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
        },
    },
    plugins: [],
};
