import { CheckoutSheetAndroid } from 'checkout-sheet-android';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CheckoutSheetAndroid.echo({ value: inputValue })
}
