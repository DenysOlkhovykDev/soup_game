import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./game-tests",

    webServer: {
        command: "npm run dev",
        port: 3000,
        reuseExistingServer: true,
        timeout: 10_000,
    },

    use: {
        baseURL: "http://localhost:3000",
        viewport: { width: 1920, height: 1080 },
    },
});
