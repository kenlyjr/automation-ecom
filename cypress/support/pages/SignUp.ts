import { SuperPage } from './SuperPage';

export class SignUp extends SuperPage {
	usernameField: () => Cypress.Chainable<JQuery<HTMLElement>>;
	emailAddress: () => Cypress.Chainable<JQuery<HTMLElement>>;
	formSignupBtn: () => Cypress.Chainable<JQuery<HTMLElement>>;
	accountInfoTitle: () => Cypress.Chainable<JQuery<HTMLElement>>;

	constructor() {
		super();
		//this.signUpBtn = () => cy.get('button[data-qa="signup-button"]');
		this.usernameField = () => cy.get('input[data-qa=\'signup-name\']');
		this.emailAddress = () => cy.get('input[data-qa="signup-email"]');
		this.formSignupBtn = () => cy.get('button[data-qa="signup-button"]');
		this.accountInfoTitle = () => cy.get('div.login-form > h2.title.text-center');
	}
	visit()	{
		cy.visit(this.baseUrl);
	}
	clickHeaderSignupLogin() {
		this.getLoginButton().click();
	}
	newUser(username: string) {
		const userField = this.usernameField();
		userField.type(username);
		return userField;
	}
	newEmailAddress(email: string) {
		const emailField = this.emailAddress();
		emailField.type(email);
		return emailField;
	}
	clickFormSignupBtn() {
		this.formSignupBtn().click();
	}
	checkAccountInfoTitle() {
		return this.accountInfoTitle();
	}
}
