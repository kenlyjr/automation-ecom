export class SuperPage {
	baseUrl: string;

	constructor() {
		this.baseUrl = 'http://automationexercise.com';
	}
	getLoginButton() {
		return cy.get('a[href="/login"]');
	}
}
