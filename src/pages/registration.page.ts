import {type Locator, type Page } from '@playwright/test';
import { clickElement,
        elementIsVisible, 
        setText,
        elementCheck, 
        elementDropdownSelection } from '../helpers/action.helper';

export class RegistrationPage {
  userDetails: any;
  readonly page: Page;
  readonly FirstName: Locator;
  readonly LastName: Locator;
  readonly Email: Locator;
  readonly DOB: Locator;
  readonly RegPassword: Locator;
  readonly RegPasswordConfirm: Locator;
  readonly Country: Locator;
  readonly AgreePrivacy: Locator;
  readonly PhaseOneNext: Locator;
  readonly BrandName:Locator;
  readonly PhaseTwoNext: Locator;
  readonly ConfirmHeader: Locator;
  readonly StartShopping: Locator;

  constructor(page: Page) {
    this.page = page;
    this.FirstName = page.getByPlaceholder('First Name');
    this.LastName = page.getByPlaceholder('Last Name');
    this.Email = page.getByPlaceholder('Email');
    this.DOB = page.getByPlaceholder('YYYY');
    this.RegPassword = page.getByLabel('Password\n            *');
    this.RegPasswordConfirm = page.getByLabel('Password Confirmation');
    this.Country = page.getByLabel('Country\n        *');
    this.AgreePrivacy =  page.getByLabel('I agree to inMusic\'s  Privacy');
    this.PhaseOneNext = page.getByRole('button', { name: 'Next step' });
    this.BrandName = page.getByRole('img', { name: 'DENONDJ' });
    this.PhaseTwoNext = page.getByRole('button', { name: 'Create Account' });
    this.ConfirmHeader = page.getByRole('heading', { name: '3. Confirm' });
    this.StartShopping = page.getByRole('link', { name: 'start shopping' });
  }
 
  async registrationPhaseOne() {
    await setText(this.FirstName, 'luthando');
    await setText(this.LastName, 'MJJ');
    await setText(this.Email, 'thandos1503@gmail.com');
    await setText(this.DOB, '1947');
    await setText(this.RegPassword, 'Abc123##');
    await setText(this.RegPasswordConfirm, 'Abc123##');
    await elementDropdownSelection(this.Country, 'US');
    await elementCheck(this.AgreePrivacy);
    await clickElement(this.PhaseOneNext);
  }

  async registrationPhaseTwo() {
    await clickElement(this.BrandName);
    await clickElement(this.PhaseTwoNext);
  }

  async registrationValidation() {
    await elementIsVisible(this.ConfirmHeader);
    await elementIsVisible(this.StartShopping);
  }
}