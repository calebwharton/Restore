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
            },
            colors: {
                primary: "#FDFAD7",
                secondary: "#F4DEA2",
                accent: "#D4A473",
                gprimary: "#ABBA77",
                gsecondary: "#E5ECC3",
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
