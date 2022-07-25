/* eslint-disable require-jsdoc */

class LoginPage {
  private emailInput: string;
  private passwordInput: string;
  private signInButton: string;

  constructor() {
    this.emailInput = "#email";
    this.passwordInput = "#passwd";
    this.signInButton = "#SubmitLogin";
  }

  public loginToCheckOut(email: string, password: string): void {
    cy.get(this.emailInput).type(email);
    cy.get(this.passwordInput).type(password);
  }

  public proceedToAddress(): void {
    cy.get(this.signInButton).click();
  }
}

export {LoginPage};
