/* eslint-disable require-jsdoc */

class AddressStep {
  private proceedToCheckoutAddressButton: string;

  constructor() {
    this.proceedToCheckoutAddressButton = "[name='processAddress']";
  }

  public proceedToShipping(): void {
    cy.get(this.proceedToCheckoutAddressButton).click();
  }
}

export {AddressStep};
