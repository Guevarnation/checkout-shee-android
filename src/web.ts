// import { WebPlugin, PluginListenerHandle } from '@capacitor/core';
// import type {
//   CheckoutSheetAndroidPlugin,
//   CheckoutConfiguration,
// } from './definitions';

// export class CheckoutSheetAndroid
//   extends WebPlugin
//   implements CheckoutSheetAndroidPlugin
// {
//   async openCheckoutSheet(options: CheckoutConfiguration): Promise<void> {
//     console.log('openCheckoutSheet called with options:', options);
//     throw new Error('openCheckoutSheet is not implemented on web');
//   }

//   // Remove or comment out these methods if they're not part of your CheckoutSheetAndroidPlugin interface
//   // async echo(options: { value: string }): Promise<{ value: string }> {
//   //   console.log('ECHO', options);
//   //   return options;
//   // }

//   // async checkoutSheetMethod(options: {
//   //   value: string;
//   // }): Promise<{ value: string }> {
//   //   throw new Error('checkoutSheetMethod is not implemented on web');
//   // }

//   // async presentCheckout(): Promise<void> {
//   //   throw new Error('presentCheckout is not implemented on web');
//   // }

//   // async preloadCheckout(): Promise<void> {
//   //   throw new Error('preloadCheckout is not implemented on web');
//   // }

//   // async configure(options: { config: any }): Promise<void> {
//   //   console.log('Configure called with config:', options.config);
//   //   throw new Error('configure is not implemented on web');
//   // }

//   addListener(
//     eventName: string,
//     listenerFunc: (...args: any[]) => any,
//   ): Promise<PluginListenerHandle> & PluginListenerHandle {
//     const promise = super.addListener(eventName, listenerFunc);
//     return Object.assign(promise, {
//       remove: () => {
//         return promise.then(handle => handle.remove());
//       },
//     });
//   }
// }
