import { type Page } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
 }
 
  async navigateToHomePage() {
    await this.page.goto(process.env.URL, { timeout: 80000 });;
  }
}