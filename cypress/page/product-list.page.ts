/* eslint-disable require-jsdoc */

class ProductListPage {
  private addToCartButton: string;
  private proceedToCheckoutButton: string;

  constructor() {
    this.addToCartButton = "[title='Add to cart']";
    this.proceedToCheckoutButton = "[title='Proceed to checkout']";
  }

  public addTShirtToCart(): void {
    cy.get(this.addToCartButton).click();
  }

  public proceedToCkeckout(): void {
    cy.get(this.proceedToCheckoutButton).click();
  }
}

export {ProductListPage};
