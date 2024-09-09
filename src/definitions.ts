export interface CheckoutSheetAndroidPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
