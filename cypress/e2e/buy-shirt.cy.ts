import {AddressStep, LoginPage, MenuContentPage, PaymentStep, ProductListPage,
  ShippingStep, ShoppingCartPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStep = new AddressStep();
const shippingStep = new ShippingStep();
const paymentStep = new PaymentStep();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirtToCart();
    productListPage.proceedToCkeckout();
    shoppingCartPage.proceedToCkeckoutLogin();
    loginPage.loginToCheckOut();
    loginPage.proceedToAddress();
    addressStep.proceedToShipping();
    shippingStep.acceptTermsOfService();
    shippingStep.proceedToPayment();
    paymentStep.payByBankWire();
    paymentStep.confirmOrder();
    paymentStep.checkSuccesfulyOrder();
  });
});
