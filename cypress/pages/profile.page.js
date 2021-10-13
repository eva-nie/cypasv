import Page from './page';

class ProfilePage extends Page {
    get iconAvatar () { return cy.get('.ant-avatar-square') }
}

export default new ProfilePage();
