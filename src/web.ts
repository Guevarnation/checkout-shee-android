import { WebPlugin } from '@capacitor/core';

import type { CheckoutSheetAndroidPlugin } from './definitions';

export class CheckoutSheetAndroidWeb
  extends WebPlugin
  implements CheckoutSheetAndroidPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
