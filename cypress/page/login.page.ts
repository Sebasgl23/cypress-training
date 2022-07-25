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

  public loginToCheckOut(): void {
    cy.get(this.emailInput).type("aperdomobo@gmail.com");
    cy.get(this.passwordInput).type("WorkshopProtractor");
  }

  public proceedToAddress(): void {
    cy.get(this.signInButton).click();
  }
}

export {LoginPage};
