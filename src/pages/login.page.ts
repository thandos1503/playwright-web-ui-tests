import { type Locator, type Page } from '@playwright/test';
import { dataHelper } from '../helpers/data.helpers';
import { clickElement, setText } from '../helpers/action.helper';

export class LoginPage {
  userDetails: any;
  readonly page: Page;
  readonly EmailLogin: Locator;
  readonly PwdLogin: Locator;
  readonly SignInButton: Locator;
  readonly RegisterButton:Locator;

  constructor(page: Page) {
    this.page = page;
    this.EmailLogin = page.getByPlaceholder('Your E-mail Address');
    this.PwdLogin = page.getByPlaceholder('Your Password');
    this.SignInButton = page.getByRole('button', { name: 'Sign In' });
    this.RegisterButton = page.getByRole('link', { name: 'Create Account' });
  }
 
  async getUserDetail(user) {
    let Details = await dataHelper.userObjectList().find(list => list.TestFeature === user)
    return Details;
  }

  async userLogin(user) {
    this.userDetails = await this.getUserDetail(user);

    await setText(this.EmailLogin, this.userDetails?.userName);
    await setText(this.PwdLogin, this.userDetails?.Password);
    await clickElement(this.SignInButton);
  }

  async clickRegisterButton() {
    await clickElement(this.RegisterButton);
  }
}