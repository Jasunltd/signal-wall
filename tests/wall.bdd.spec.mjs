import { test, expect } from '@playwright/test';
test('BDD: Netlify preview is local-only and protected', async ({ page, baseURL }) => {
  const requests=[]; page.on('request', r => requests.push(r.url()));
  const response=await page.goto(baseURL);
  expect(response?.headers()['content-security-policy']).toContain("default-src 'none'");
  expect(response?.headers()['referrer-policy']).toBe('no-referrer');
  await expect(page.locator('#title')).toHaveText('Night Drive');
  await page.goto(baseURL+'#not-a-channel');
  await expect(page.locator('#title')).toHaveText('CHANNEL UNAVAILABLE');
  await page.goto(baseURL+'#night-drive');
  const first=page.locator('.channel').first(); await first.focus(); await page.keyboard.press('ArrowLeft');
  await expect(page.locator('.channel').last()).toBeFocused();
  await page.keyboard.press('Enter'); await expect(page).toHaveURL(/#matinee$/);
  for(const url of requests) expect(new URL(url).origin).toBe(new URL(baseURL).origin);
});
