/* eslint-disable require-jsdoc */

class ShippingStep {
  private termsOfServiceCheckbox: string;
  private proceedToCheckoutShippingButton: string;

  constructor() {
    this.termsOfServiceCheckbox = "[name='cgv']";
    this.proceedToCheckoutShippingButton = "[name='processCarrier']";
  }

  public acceptTermsOfService():void {
    cy.get(this.termsOfServiceCheckbox).click();
  }

  public proceedToPayment():void {
    cy.get(this.proceedToCheckoutShippingButton).click();
  }
}

export {ShippingStep};
