import {
  AddressStep,
  LoginPage,
  MenuContentPage,
  PaymentStep,
  ProductListPage,
  ShippingStep,
  ShoppingCartPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStep = new AddressStep();
const shippingStep = new ShippingStep();
const paymentStep = new PaymentStep();
const email = "aperdomobo@gmail.com";
const password = "WorkshopProtractor";
const confirmationMessage = "Your order on My Store is complete.";

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirtToCart();
    productListPage.proceedToCkeckout();
    shoppingCartPage.proceedToCkeckoutLogin();
    loginPage.login(email, password);
    addressStep.proceedToShipping();
    shippingStep.acceptTermsOfService();
    shippingStep.proceedToPayment();
    paymentStep.payByBankWire();
    paymentStep.confirmOrder();
    paymentStep.validateConfirmationMessage(confirmationMessage);
  });
});
