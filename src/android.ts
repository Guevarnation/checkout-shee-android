import { registerPlugin } from '@capacitor/core';

import type { CheckoutSheetAndroidPlugin } from './definitions';

const CheckoutSheetAndroid = registerPlugin<CheckoutSheetAndroidPlugin>(
  'CheckoutSheetAndroid',
);

export { CheckoutSheetAndroid };
