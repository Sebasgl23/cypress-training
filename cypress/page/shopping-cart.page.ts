/* eslint-disable require-jsdoc */

class ShoppingCartPage {
  private proceedToCheckOutLogInButton: string;

  constructor() {
    this.proceedToCheckOutLogInButton = ".cart_navigation [title='Proceed to checkout']";
  }

  public proceedToCkeckoutLogin(): void {
    cy.get(this.proceedToCheckOutLogInButton).click();
  }
}

export {ShoppingCartPage};
