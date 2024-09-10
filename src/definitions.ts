import type { PluginListenerHandle } from '@capacitor/core';

export interface CheckoutSheetAndroidPlugin {
  presentCheckout(options: { checkoutUrl: string }): Promise<void>;
  preloadCheckout(options: { checkoutUrl: string }): Promise<void>;
  configure(options: { config: CheckoutConfiguration }): Promise<void>;
  addListener(
    eventName:
      | 'checkoutCompleted'
      | 'checkoutCanceled'
      | 'checkoutFailed'
      | 'webPixelEvent'
      | 'checkoutLinkClicked',
    listenerFunc: (event: any) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  removeAllListeners(): Promise<void>;
}

export interface CheckoutConfiguration {
  colorScheme?: ColorScheme;
  preloading?: Preloading;
  errorRecovery?: ErrorRecovery;
}

export type ColorScheme = 'Automatic' | 'Light' | 'Dark' | 'Web';

export interface Preloading {
  enabled: boolean;
}

export interface ErrorRecovery {
  shouldRecoverFromError?: (error: CheckoutException) => boolean;
}

export interface CheckoutCompletedEvent {
  orderId: string;
}

export interface CheckoutFailedEvent {
  error: CheckoutException;
}

export interface WebPixelEvent {
  name: string;
  data: string;
}

export interface CheckoutLinkClickedEvent {
  uri: string;
}

export interface CheckoutException {
  code: string;
  message: string;
  isRecoverable: boolean;
}
