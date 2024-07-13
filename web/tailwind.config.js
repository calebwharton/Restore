import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [daisyui],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat"],
                body: ["Open Sans"],
                title: ["Rubik Mono One"],
            },
            colors: {
                navy: "#364652",
                primary: "#E7F3F3",
                secondary: "#779EBA",
                accent: "#AACCCC",
                offwhite: "#FFF6E4",
                
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...themes["light"],
                    accent: "#087df1",
                },
                dark: {
                    ...themes["dark"],
                    accent: "#087df1",
                },
            },
        ],
    },
};
