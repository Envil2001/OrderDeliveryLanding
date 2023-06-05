/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            letterSpacing: {
                tight: '-2px',
            },
            colors: {
                customGray: {
                    100: '#cdcfd0',
                    200: '#babcbe',
                },
                customBlack: '#191b1d',
                customWhite: '#ffffff',
                customBorder: '#acaeb0',
                curstomText: '#707072',
            },
        },
    },
    plugins: [],
}