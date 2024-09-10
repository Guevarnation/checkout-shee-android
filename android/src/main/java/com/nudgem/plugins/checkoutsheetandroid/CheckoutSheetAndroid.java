package com.nudgem.plugins.checkoutsheetandroid;

import androidx.appcompat.app.AppCompatActivity;
import com.shopify.checkoutsheetkit.DefaultCheckoutEventProcessor;
import com.shopify.checkoutsheetkit.ShopifyCheckoutSheetKit;

public class CheckoutSheetAndroid {

    public void presentCheckout(String checkoutUrl, AppCompatActivity activity, DefaultCheckoutEventProcessor processor) {
        ShopifyCheckoutSheetKit.present(checkoutUrl, activity, processor);
    }
}