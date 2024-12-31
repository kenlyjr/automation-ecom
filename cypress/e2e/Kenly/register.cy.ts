//import fixtureData from 'cypress/fixtures/data/registeringUser.json'; usar nueva forma
import type { FixtureData } from 'cypress/support/interfaces/fixture.interface';
/*1-hOME Page
2- lOGIN
3- Signup
4- account_created
5- Vuelve al Home page Logeado
6- delete_account*/
import { SignUp } from '@pages/SignUp';
import { AccountInfo } from '@pages/FillAccountInfo';

describe ('Register user', () => {
	const signUpPage = new SignUp();
	const fillAccountInfo = new AccountInfo();
	let fixtureData: FixtureData;
	beforeEach('', () =>
	{
		signUpPage.visit();
		cy.fixture('Data/registeringUser')
			.then((data:FixtureData) => {
				fixtureData = data;
			});
	});
	it('TC1: Should redirect to the Login page after clicking on SignUp/Login button ', () =>
	{
		cy.url().should('include', fixtureData.domains.baseURL);
		signUpPage.clickHeaderSignupLogin();
		cy.url().should('contain', fixtureData.endpoints.login);
	});
	it('TC2: Sign up successfully', () =>
	{
		signUpPage.visit();
		signUpPage.clickHeaderSignupLogin();
		signUpPage.newUser(fixtureData.user.name).should('have.value', fixtureData.user.name);
		signUpPage.newEmailAddress(fixtureData.user.email).should('have.value', fixtureData.user.email);
		signUpPage.clickFormSignupBtn();
		cy.url().should('contain', fixtureData.endpoints.signup);
		signUpPage.checkAccountInfoTitle().should('have.text', fixtureData.text.accountLabel);
	});
	it('TC3: Create account successfully', () =>
	{
		signUpPage.visit();
		signUpPage.clickHeaderSignupLogin();
		signUpPage.newUser(fixtureData.user.name).should('have.value', fixtureData.user.name);
		signUpPage.newEmailAddress(fixtureData.user.email).should('have.value', fixtureData.user.email);
		signUpPage.clickFormSignupBtn();
		fillAccountInfo.clickTitleCheckbox().should('be.checked');
		fillAccountInfo.selectRandomDay().should('be.within', 1, 31);
		fillAccountInfo.selectRandomMonth();
		fillAccountInfo.selectRandomYear();
		/*cy.get('a[href="/login"]').click();
		cy.contains('h2', 'New User Signup!');
		selectablePage.newUserSignUp('Kenly', 'kenly1@gmail.com');//.should('contain', 'Kenly', 'kenly1@gmail.com');
		selectablePage.signUpClick();
		cy.log('Checking URL');
		cy.url().should('contain', '/signup');
		cy.log('Checking header');
		cy.contains('h2', 'Enter Account Information').should('be.visible');*/
	});
	it('TC4: Delete an Account', () =>
	{

	});
});
