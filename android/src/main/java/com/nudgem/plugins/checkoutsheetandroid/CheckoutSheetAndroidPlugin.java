package com.nudgem.plugins.checkoutsheetandroid;

import android.net.Uri;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.shopify.checkoutsheetkit.CheckoutException;
import com.shopify.checkoutsheetkit.DefaultCheckoutEventProcessor;
import com.shopify.checkoutsheetkit.ShopifyCheckoutSheetKit;
import com.shopify.checkoutsheetkit.lifecycleevents.CheckoutCompletedEvent;

@CapacitorPlugin(name = "CheckoutSheetAndroid")
public class CheckoutSheetAndroidPlugin extends Plugin {

    private final CheckoutSheetAndroid implementation = new CheckoutSheetAndroid();

    @PluginMethod
    public void presentCheckout(final PluginCall call) {
        final String checkoutUrl = call.getString("checkoutUrl");
        if (checkoutUrl == null) {
            call.reject("Must provide a checkoutUrl");
            return;
        }

        getBridge()
            .executeOnMainThread(
                new Runnable() {
                    @Override
                    public void run() {
                        AppCompatActivity activity = getActivity();
                        if (activity == null) {
                            call.reject("Activity is null");
                            return;
                        }

                        DefaultCheckoutEventProcessor processor = new DefaultCheckoutEventProcessor(activity) {
                            @Override
                            public void onCheckoutCompleted(@NonNull CheckoutCompletedEvent checkoutCompletedEvent) {
                                JSObject result = new JSObject();
                                result.put("orderId", "DUMMY_ORDER_ID"); // Replace with actual order ID if available
                                notifyListeners("checkoutCompleted", result);
                            }

                            @Override
                            public void onCheckoutCanceled() {
                                notifyListeners("checkoutCanceled", new JSObject());
                            }

                            @Override
                            public void onCheckoutFailed(CheckoutException error) {
                                JSObject result = new JSObject();
                                result.put("code", error.getErrorCode());
                                result.put("message", error.getMessage());
                                result.put("isRecoverable", error.isRecoverable());
                                notifyListeners("checkoutFailed", result);
                            }

                            @Override
                            public void onCheckoutLinkClicked(Uri uri) {
                                JSObject result = new JSObject();
                                result.put("uri", uri.toString());
                                notifyListeners("checkoutLinkClicked", result);
                            }
                        };

                        implementation.presentCheckout(checkoutUrl, activity, processor);
                        call.resolve();
                    }
                }
            );
    }
}
