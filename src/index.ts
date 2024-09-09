import { registerPlugin } from '@capacitor/core';

import type { CheckoutSheetAndroidPlugin } from './definitions';

const CheckoutSheetAndroid = registerPlugin<CheckoutSheetAndroidPlugin>(
  'CheckoutSheetAndroid',
  {
    web: () => import('./web').then(m => new m.CheckoutSheetAndroidWeb()),
  },
);

export * from './definitions';
export { CheckoutSheetAndroid };
