
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                // petPage: resolve(__dirname, "pages/petPage/index.html"),
                petPage: resolve(__dirname, "pages/petPage.html"),
            },
        },
    },
});
