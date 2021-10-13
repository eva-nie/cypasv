import Page from './page';
class LoginPage extends Page {
    get inputEmail () { return cy.get('#normal_login_email') }
    get inputPassword () { return cy.get('#normal_login_password') }
    get buttonLogIn () { return cy.get('.login-form-button')}
    get notification () { return cy.get('.ant-notification-notice-message') }
    get emailValidation() { return cy.xpath('//div[contains(@class, "ant-form-item-with-help")][div//input[@id="normal_login_email"]]//div[@role="alert"]') }
    get passwordValidation() { return cy.xpath('//div[contains(@class, "ant-form-item-with-help")][div//input[@id="normal_login_password"]]//div[@role="alert"]') }


    login(email, password) {
        this.inputEmail.type(email);
        this.inputPassword.type(password);
        this.buttonLogIn.click();

    }
    open() {
        return super.open('/user/login');
    }
}

export default new LoginPage();