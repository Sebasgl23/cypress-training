/* eslint-disable require-jsdoc */

class ShoppingCartPage {
  private proceedToCheckOutLogInButton: string;

  constructor() {
    this.proceedToCheckOutLogInButton = ".cart_navigation span";
  }

  public proceedToCkeckoutLogin(): void {
    cy.get(this.proceedToCheckOutLogInButton).click();
  }
}

export {ShoppingCartPage};
