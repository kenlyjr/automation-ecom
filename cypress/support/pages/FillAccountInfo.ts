import { SuperPage } from './SuperPage';

export class AccountInfo extends SuperPage {
	titleCheckbox: (index: number) => Cypress.Chainable<JQuery<HTMLElement>>;
	nameField: () => Cypress.Chainable<JQuery<HTMLElement>>;
	emailField: () => Cypress.Chainable<JQuery<HTMLElement>>;
	passwordField: () => Cypress.Chainable<JQuery<HTMLElement>>;
	dayDropdown: () => Cypress.Chainable<JQuery<HTMLElement>>;
	monthDropdown: () => Cypress.Chainable<JQuery<HTMLElement>>;
	yearDropdown: () => Cypress.Chainable<JQuery<HTMLElement>>;

	constructor() {
		super();
		this.titleCheckbox = (index) => cy.get('input[name="title"]').eq(index);
		this.nameField = () => cy.get('input[data-qa="name"]');
		this.emailField = () => cy.get('input[data-qa="email"]');
		this.passwordField = () => cy.get('input[data-qa="password"');
		this.dayDropdown = () => cy.get('select[data-qa="days"]');
		this.monthDropdown = () => cy.get('select[data-qa="months"]');
		this.yearDropdown = () => cy.get('select[data-qa="years"]');
	}
	clickTitleCheckbox() {
		const randomIndex = Math.floor(Math.random() * 2); //This is due to the fact we have 2 items to choose from
		this.titleCheckbox(randomIndex).click();
		return this.titleCheckbox(randomIndex);
	}
	typeUsername(username: string) {
		const usernameInput = this.nameField();
		usernameInput.type(username);
		return usernameInput;
	}
	typeEmail(email: string) {
		const emailInput = this.emailField();
		emailInput.type(email);
		return emailInput;
	}
	typePassword(password: string) {
		const passwordInput = this.passwordField();
		passwordInput.type(password);
		return passwordInput;
	}
	selectRandomDay() {
		return this.dayDropdown()
			.find('option')
			.not('[value=""]')
			.then($options => {
				const randomIndex: number = Math.floor(Math.random() * $options.length);
				return cy.wrap($options)
					.eq(randomIndex)
					.parent()

					.select($options.eq(randomIndex).val() as string)
					.invoke('val')
					.then(Number); // Convertir a número explícitamente
			});
	}
	selectRandomMonth() {
		return this.monthDropdown()
			.find('option')
			.not('[value=""]')
			.then($options => {
				const randomIndex: number = Math.floor(Math.random() * $options.length);
				cy.wrap($options)
					.eq(randomIndex)
					.parent()
					.select($options.eq(randomIndex).val() as string); // as number is important here because TS is being used
			});
	}
	selectRandomYear() {
		this.yearDropdown()
			.find('option')
			.not('[value=""]')
			.then($options => {
				const randomIndex: number = Math.floor(Math.random() * $options.length);
				cy.wrap($options)
					.eq(randomIndex)
					.parent()
					.select($options.eq(randomIndex).val() as number); // as number is important here because TS is being used
			});
	}
}
