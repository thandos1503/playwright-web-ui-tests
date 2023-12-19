import { type Locator, type Page } from '@playwright/test';
import { clickElement } from '../helpers/action.helper';

export class HomePage {
  readonly page: Page;
  readonly HeaderSignIn: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.HeaderSignIn = page.getByRole('link', { name: 'Account' });
  }
 
  async clickHeaderAccount() {
    await clickElement(this.HeaderSignIn);
  }
}