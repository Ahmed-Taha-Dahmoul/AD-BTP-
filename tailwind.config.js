/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "!./node_modules/**"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#f48525",
                "primary-light": "#fff1e6",
                "cool-gray": "#f0f4f8",
                "slate-dark": "#1e293b",
                "slate-med": "#334155",
                "soft-blue": "#e2e8f0",
            },
            fontFamily: {
                "sans": ["Nunito", "sans-serif"],
                "display": ["Nunito", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "2xl": "2rem", "full": "9999px" },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
