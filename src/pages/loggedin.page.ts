import { type Locator, type Page } from '@playwright/test';
import { clickElement, elementIsVisible } from '../helpers/action.helper';

export class LoggedInPage {
  userDetails: any;
  readonly page: Page;
  readonly myAccount: Locator;
  readonly comInformation: Locator;
  readonly comOrders: Locator;
  readonly ProductsLink: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.myAccount = page.getByText('My Account', { exact: true });
    this.comInformation = page.getByText('Information incomplete Complete your profile here to unlock exclusive giveaways');
    this.comOrders = page.getByText('Recent Orders Order overview You have no orders.');
    this.ProductsLink = page.getByLabel('See all your product');
  }

  async clickProductsLink() {
    await clickElement(this.ProductsLink);
  }
 
  async validateLoggedIn() {
    await elementIsVisible(this.myAccount);
    await elementIsVisible(this.comInformation);
    await elementIsVisible(this.comOrders);
   }
}