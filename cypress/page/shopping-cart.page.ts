/* eslint-disable require-jsdoc */

class ShoppingCartPage {
  private proceedToCheckOutLogInButton: string;

  constructor() {
    this.proceedToCheckOutLogInButton = "[title='Proceed to checkout']";
  }

  public proceedToCkeckoutLogin(): void {
    cy.get(this.proceedToCheckOutLogInButton).eq(1).click();
  }
}

export {ShoppingCartPage};
