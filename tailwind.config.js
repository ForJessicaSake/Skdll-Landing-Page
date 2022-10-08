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
                fbtn: "52rem",
                im: "40rem",
                bt: "16.5rem",


            },
            height: {
                ht: "30rem",
                htt: "22rem",
            },
            padding: {
                ptt: "0.4rem",
                ptb: "0.5rem",

            },
            screens: {
                xxs: {
                    min: "300px",
                    max: "390px",
                },
                 
                xxm: {
                    min: "390px",
                    max: "500px",
                },

                xms: {
                    min: "501px",
                    max: "768px",
                },
                smm: {
                    min: "769px",
                    max: "1024px",
                },   
            }
        },
    },
    plugins: [],
};