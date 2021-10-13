import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function () {
    beforeEach(function () {
        LoginPage.open()
    });

    it('successful log in', function () {
        LoginPage.login('nipixid409@naymeo.com', '123456');
        ProfilePage.iconAvatar.should('be.visible');
    });

    it('Wrong credentials throw error', function () {
        LoginPage.login('invalid@example.com', 'invalid');
        LoginPage.notification.should('contain.text', 'Auth failed');
    });

    it('Email format validation', function () {
        LoginPage.inputEmail.type('invalid');
        LoginPage.emailValidation.should('contain.text', '\'email\' is not a valid email')
    });

    it('Email required validation', function () {
        LoginPage.inputEmail.type('invalid@example.com');
        LoginPage.inputEmail.smartClear();
        LoginPage.emailValidation.should('contain.text', 'Required');
    });

    it('Password required validation', function () {
        LoginPage.inputPassword.type('invalid');
        LoginPage.inputPassword.clear();
        LoginPage.passwordValidation.should('contain.text', 'Required');
    });
});