import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: ['Rubik', 'sans-serif'],
            },
        },
    },
});
