/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                greeen: "#86eab4",
                green: "#54CC8B",
                Green: "#7bdfa9",
                black: "#121212",


            },
            fontFamily: {
                font: ["Poppins", "sans-serif"],
            },
            width: {
                wt: "29rem",
                wtb: "35rem",
                wtt: "22rem",
                wttt: "50rem",
                fbtn: "61rem",
                im: "40rem",
            },
            height: {
                ht: "30rem",
                htt: "22rem",
            },
            padding: {
                ptt: "0.6rem",
            },
            screens: {
                xxs: {
                    min: "320px",
                    max: "480px",
                },
                xms: {
                    min: "481px",
                    max: "700px",
                },
                smm: {
                    min: "700px",
                    max: "1024px",
                },   
            }
        },
    },
    plugins: [],
};