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
                grey: "#F2F2F2",
            },
            fontFamily: {
                font: ["Poppins", "sans-serif"],
            },
            width: {
                wt: "29rem",
                wtb: "35rem",
                wtt: "22rem",
                wttt: "50rem",
                fbtn: "40rem",
                im: "40rem",
                bt: "16.5rem",
                btt: "16rem",
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
                    min: "0px",
                    max: "360px",
                },
                 
                xxm: {
                    min: "361px",
                    max: "500px",
                },

                xms: {
                    min: "501px",
                    max: "738px",
                },
                smm: {
                    min: "739px",
                    max: "1150px",
                },   
            }
        },
    },
    plugins: [],
};