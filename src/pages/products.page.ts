import { type Locator, type Page } from '@playwright/test';
import { elementIsVisible } from '../helpers/action.helper';

export class ProductsPage {
  readonly page: Page;
  readonly ProductsComponent: Locator;
  readonly DownloadsComponent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ProductsComponent = page.locator('div').filter({ hasText: /^Your registered products$/ })
    this.DownloadsComponent = page.locator('div').filter({ hasText: /^Downloads$/ });
  }
 
  async validateOnProductsPage() {
    await elementIsVisible(this.ProductsComponent);
    await elementIsVisible(this.DownloadsComponent);
  }
}