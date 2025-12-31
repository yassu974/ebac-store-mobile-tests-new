import HomePage from '../pageobjects/home.page.js';
import LoginPage from '../pageobjects/login.page.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await HomePage.goToProfile();

        await loginPage.login(
          'cliente@ebac.art.br',
          'GD*peToHNJ1#c$sgk08EaYJQ'
        )
    })
})