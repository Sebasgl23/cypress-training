/* eslint-disable require-jsdoc */

class PaymentStep {
  private payByBankWireButton: string;
  private confirmOrderButton: string;
  private confirmPaymentText: string;

  constructor() {
    this.payByBankWireButton = ".payment_module .bankwire";
    this.confirmOrderButton = ".cart_navigation span";
    this.confirmPaymentText = "#center_column > div > p > strong";
  }

  public payByBankWire():void {
    cy.get(this.payByBankWireButton).click();
  }

  public confirmOrder():void {
    cy.get(this.confirmOrderButton).click();
  }

  public validateConfirmationMessage(confirmationMessage: string):void {
    cy.get(this.confirmPaymentText).should(
        "have.text",
        `${confirmationMessage}`);
  }
}

export {PaymentStep};
