import { defineConfig } from '@playwright/test';
export default defineConfig({ testDir: './tests', timeout: 30000, use: { baseURL: process.env.PREVIEW_URL || 'https://6a5851b178f054f299f548cf--jasunltd-signal-wall.netlify.app' } });
