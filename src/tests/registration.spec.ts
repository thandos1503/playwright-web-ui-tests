import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { NavigationPage } from '../helpers/navigation.helpers';
import { LoginPage } from '../pages/login.page';
import { RegistrationPage } from '../pages/registration.page';

test.describe.parallel('Registration', () =>  {

    let homePage: any
    let navigationPage: any
    let loginPage: any
    let registrationPage: any
    
    test.beforeEach(async ({ page }) => {
        
        navigationPage  = new NavigationPage(page);
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        registrationPage = new RegistrationPage(page);
 
        navigationPage.navigateToHomePage(page);
    });

    test('As a user, i want to validate if i can register a new user ', async () => {
        await homePage.clickHeaderAccount();
        await loginPage.clickRegisterButton();
        await registrationPage.registrationPhaseOne();
        await registrationPage.registrationPhaseTwo();
        await registrationPage.registrationValidation();
    });
})

