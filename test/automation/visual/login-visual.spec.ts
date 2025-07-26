import { test, expect } from '@playwright/test';

test.describe('Login Page Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page
    await page.goto('/');
  });

  test('Login page initial state', { tag: '@visual' }, async ({ page }) => {
    // Wait for the page to load completely
    await page.waitForSelector('[data-testid="username-input"]', { timeout: 10000 });
    
    // Take screenshot of the initial login page
    await expect(page).toHaveScreenshot('login-page-initial.png', {
      fullPage: true,
      maxDiffPixels: 100
    });
  });

  test('Login page with filled form', { tag: '@visual' }, async ({ page }) => {
    // Wait for the page to load
    await page.waitForSelector('[data-testid="username-input"]', { timeout: 10000 });
    
    // Fill in the form
    await page.fill('[data-testid="username-input"]', 'admin');
    await page.fill('[data-testid="password-input"]', 'password');
    
    // Take screenshot with filled form
    await expect(page).toHaveScreenshot('login-page-filled-form.png', {
      fullPage: true,
      maxDiffPixels: 100
    });
  });

  test('Login page loading state', { tag: '@visual' }, async ({ page }) => {
    // Wait for the page to load
    await page.waitForSelector('[data-testid="username-input"]', { timeout: 10000 });
    
    // Fill in the form
    await page.fill('[data-testid="username-input"]', 'admin');
    await page.fill('[data-testid="password-input"]', 'password');
    
    // Click login button and wait for loading state
    await page.click('[data-testid="login-button"]');
    
    // Wait for the loading state to appear
    await page.waitForSelector('text=Signing In...', { timeout: 5000 });
    
    // Take screenshot during loading state
    await expect(page).toHaveScreenshot('login-page-loading.png', {
      fullPage: true,
      maxDiffPixels: 100
    });
  });

  test('Login page error state', { tag: '@visual' }, async ({ page }) => {
    // Wait for the page to load
    await page.waitForSelector('[data-testid="username-input"]', { timeout: 10000 });
    
    // Fill in invalid credentials
    await page.fill('[data-testid="username-input"]', 'invalid');
    await page.fill('[data-testid="password-input"]', 'wrong');
    
    // Click login button
    await page.click('[data-testid="login-button"]');
    
    // Wait for error message to appear
    await page.waitForSelector('text=Invalid username or password', { timeout: 5000 });
    
    // Take screenshot with error state
    await expect(page).toHaveScreenshot('login-page-error.png', {
      fullPage: true,
      maxDiffPixels: 100
    });
  });

  test('Login page responsive - mobile view', { tag: '@visual' }, async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Wait for the page to load
    await page.waitForSelector('[data-testid="username-input"]', { timeout: 10000 });
    
    // Take screenshot in mobile view
    await expect(page).toHaveScreenshot('login-page-mobile.png', {
      fullPage: true,
      maxDiffPixels: 100
    });
  });

  test('Login page responsive - tablet view', { tag: '@visual' }, async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    
    // Wait for the page to load
    await page.waitForSelector('[data-testid="username-input"]', { timeout: 10000 });
    
    // Take screenshot in tablet view
    await expect(page).toHaveScreenshot('login-page-tablet.png', {
      fullPage: true,
      maxDiffPixels: 100
    });
  });

  test('Home page after successful login', { tag: '@visual' }, async ({ page }) => {
    // Wait for the page to load
    await page.waitForSelector('[data-testid="username-input"]', { timeout: 10000 });
    
    // Fill in valid credentials
    await page.fill('[data-testid="username-input"]', 'admin');
    await page.fill('[data-testid="password-input"]', 'password');
    
    // Click login button
    await page.click('[data-testid="login-button"]');
    
    // Wait for navigation to home page
    await page.waitForSelector('[data-testid="logout-button"]', { timeout: 10000 });
    
    // Take screenshot of home page
    await expect(page).toHaveScreenshot('home-page.png', {
      fullPage: true,
      maxDiffPixels: 100
    });
  });
}); 