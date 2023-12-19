import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { NavigationPage } from '../helpers/navigation.helpers';
import { LoginPage } from '../pages/login.page';
import { LoggedInPage } from '../pages/loggedin.page';
import { ProductsPage } from '../pages/products.page';

test.describe.parallel('Login', () =>  {

    let homePage: any
    let navigationPage: any
    let loginPage: any
    let loggedInPage: any
    let productsPage: any
   
    test.beforeEach(async ({ page }) => {
        
        navigationPage  = new NavigationPage(page);
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        loggedInPage = new LoggedInPage(page);
        productsPage = new ProductsPage(page);

        navigationPage.navigateToHomePage(page);
    });

    test('As a user, i want to validate if i can successully login ', async () => {
        await homePage.clickHeaderAccount();
        await loginPage.userLogin("User1");
        await loggedInPage.validateLoggedIn();
      });

    test('As a user, i want to validate if i can navigate the products page ', async () => {
        await homePage.clickHeaderAccount();
        await loginPage.userLogin("User1");
        await loggedInPage.validateLoggedIn();
        await loggedInPage.clickProductsLink();
        await productsPage.validateOnProductsPage();
    });  
} )

