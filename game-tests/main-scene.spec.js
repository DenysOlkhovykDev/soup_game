import { test, expect } from "@playwright/test";

test("main scene screenshot", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.waitForFunction(() => window.game?.isBooted);

    await page.waitForTimeout(100);

    const canvas = await page.locator("canvas");

    await expect(canvas).toHaveScreenshot("main-scene.png");
});
