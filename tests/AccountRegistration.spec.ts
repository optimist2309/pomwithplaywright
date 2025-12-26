import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {RegistrationPage} from '../pages/regPage';
import {RandomDataUtil} from '../utils/randomDatagen';
import {TestConfig} from '../test.config';

test('Account Registration Tests', async({page})=> {

    // Navigate to Application URL
    const config = new TestConfig();
    await page.goto(config.appURL);

    // Home Page Actions
    const HomePageObj = new HomePage(page);
    await HomePageObj.clickMyAccount()
    await HomePageObj.clickRegister();
    
    // Registration Page Actions
    const RegPageObj = new RegistrationPage(page);
    await RegPageObj.setFirstName(RandomDataUtil.getFirstName());
    await RegPageObj.setLastName(RandomDataUtil.getlastName());
    await RegPageObj.setEmail(RandomDataUtil.getEmail());
    await RegPageObj.setTelephone(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
    await RegPageObj.setPassword(password);
    await RegPageObj.setConfirmPassword(password);
    await RegPageObj.setPrivacyPolicy();
    await RegPageObj.clickContinue();

    // Assertion for Successful Registration
    const successMessage = await RegPageObj.getConfirmationMsg();
    expect(successMessage).toContain('Your Account Has Been Created!');
    await page.waitForTimeout(5000)

})