import {Page, Locator} from '@playwright/test';

export class HomePage {
    
    private readonly page: Page;

    // Define locators
    private readonly linkMyaccount: Locator;
    private readonly linkRegister: Locator;
    private readonly linkLogin: Locator;
    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;
    
    // Constructor to initialize the page and locators

     constructor(page: Page) {
        this.page = page;
        this.linkMyaccount = page.locator('span:has-text("My Account")');
        this.linkRegister = page.locator('a:has-text("Register")');
        this.linkLogin = page.locator('a:has-text("Login")');
        this.txtSearchBox = page.locator("//input[@placeholder='Search']");
        this.btnSearch = page.locator("//button[@class='btn btn-default btn-lg']");
    }

    // Action Methods

    // Method to click on My Account link
    async clickMyAccount() {
    await this.linkMyaccount.click();
    }

    // Method to click on Register link
    async clickRegister() {
    await this.linkRegister.click();
    }

    // Method to search for a product by name
    async searchPname(productName: string) {
    await this.txtSearchBox.fill(productName);
    }

    // Method to click on Search button
    async clickSearch() {
    await this.btnSearch.click();
    }   

}
