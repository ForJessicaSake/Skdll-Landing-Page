/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                green: "#54CC8B",
            },
            fontFamily: {
                font: ["Poppins", "sans-serif"],
            },
            width: {
                wt: "30rem",
                wtb: "35rem",
                wtt: "22rem",
                wttt: "50rem",
                im: "40rem",
            },
            height: {
                ht: "30rem",
                htt: "22rem",
            },
        },
    },
    plugins: [],
};