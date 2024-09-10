# checkout-sheet-android

shopify checkout sheet for android capacitor plugin

## Install

```bash
npm install checkout-sheet-android
npx cap sync
```

## API

<docgen-index>

* [`presentCheckout(...)`](#presentcheckout)
* [`preloadCheckout(...)`](#preloadcheckout)
* [`configure(...)`](#configure)
* [`addListener('checkoutCompleted' | 'checkoutCanceled' | 'checkoutFailed' | 'webPixelEvent' | 'checkoutLinkClicked', ...)`](#addlistenercheckoutcompleted--checkoutcanceled--checkoutfailed--webpixelevent--checkoutlinkclicked-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### presentCheckout(...)

```typescript
presentCheckout(options: { checkoutUrl: string; }) => Promise<void>
```

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ checkoutUrl: string; }</code> |

--------------------


### preloadCheckout(...)

```typescript
preloadCheckout(options: { checkoutUrl: string; }) => Promise<void>
```

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ checkoutUrl: string; }</code> |

--------------------


### configure(...)

```typescript
configure(options: { config: CheckoutConfiguration; }) => Promise<void>
```

| Param         | Type                                                                                 |
| ------------- | ------------------------------------------------------------------------------------ |
| **`options`** | <code>{ config: <a href="#checkoutconfiguration">CheckoutConfiguration</a>; }</code> |

--------------------


### addListener('checkoutCompleted' | 'checkoutCanceled' | 'checkoutFailed' | 'webPixelEvent' | 'checkoutLinkClicked', ...)

```typescript
addListener(eventName: 'checkoutCompleted' | 'checkoutCanceled' | 'checkoutFailed' | 'webPixelEvent' | 'checkoutLinkClicked', listenerFunc: (event: any) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'checkoutCompleted' \| 'checkoutCanceled' \| 'checkoutFailed' \| 'webPixelEvent' \| 'checkoutLinkClicked'</code> |
| **`listenerFunc`** | <code>(event: any) =&gt; void</code>                                                                                   |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

--------------------


### Interfaces


#### CheckoutConfiguration

| Prop                | Type                                                    |
| ------------------- | ------------------------------------------------------- |
| **`colorScheme`**   | <code><a href="#colorscheme">ColorScheme</a></code>     |
| **`preloading`**    | <code><a href="#preloading">Preloading</a></code>       |
| **`errorRecovery`** | <code><a href="#errorrecovery">ErrorRecovery</a></code> |


#### Preloading

| Prop          | Type                 |
| ------------- | -------------------- |
| **`enabled`** | <code>boolean</code> |


#### ErrorRecovery

| Prop                         | Type                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| **`shouldRecoverFromError`** | <code>((error: <a href="#checkoutexception">CheckoutException</a>) =&gt; boolean)</code> |


#### CheckoutException

| Prop                | Type                 |
| ------------------- | -------------------- |
| **`code`**          | <code>string</code>  |
| **`message`**       | <code>string</code>  |
| **`isRecoverable`** | <code>boolean</code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### ColorScheme

<code>'Automatic' | 'Light' | 'Dark' | 'Web'</code>

</docgen-api>
# checkout-shee-android
