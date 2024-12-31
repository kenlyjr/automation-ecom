class Selectable
{
	get = {
		signUpBtn: () => cy.get('button[data-qa="signup-button"]'),
		usernameSignUp: () => cy.get('input[data-qa="signup-name"]'),
		emailSignUp: () => cy.get('input[data-qa="signup-email"]')
	};
	//Methods or  functions
	newUserSignUp(name: string, email: string) {
		cy.get('input[data-qa="signup-name"]').type(name);
		return cy.get('input[data-qa="signup-email"]').type(email);
	};
	/*fillSignUpForm(title, name, email, password, date of birth) {
		cy.get('input[data-qa="signup-name"]').type(name);
    	cy.get('input[data-qa="signup-email"]').type(email);
    	cy.get('button[data-qa="signup-button"]').click();
	};*/
	signUpClick() {
		return this.get.signUpBtn().then($signButton => {
			return cy.wrap($signButton).click();
		});
	};
};
export const selectablePage = new Selectable;