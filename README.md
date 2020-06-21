# BMLConnectTS

> TypeScript API Client and bindings for the [Bank of Maldives Connect API](https://github.com/bankofmaldives/bml-connect)

Using this TS API Client you can interact with your Bank of Maldives Connect API:
- 💳 __Transactions__

## Installation

Requires TS v3.0.0 or higher

The recommended way to install bml-connect-ts is through [NPM](https://getcomposer.org):

First, install Package with NPM:

```
$ npm i bml-connect-ts
```

Or Use Yarn:

```
$ yarn add bml-conntect-ts
```

Finally, import `Client` in your JavaScript or TypeScript application:

```javascript
import {Client} from 'bml-conntect-ts';
```

## Quick Start
### BMLConnectTs\Client
First get your `production` or `sandbox` API key from [Merchant Portal](https://dashboard.merchants.bankofmaldives.com.mv).

If you want to get a `production` client:

```typescript
import {Client} from 'bml-conntect-ts';

const client = new Client('apikey', 'appid');
```

If you want to get a `sandbox` client:

```typescript
import {Client} from 'bml-conntect-ts';

const client = new Client('apikey', 'appid', 'sandbox');
```

## Available API Operations

The following exposed API operations from the Bank of Maldives Connect API are available using the API Client.

See below for more details about each resource.

💳 __Transactions__

Create a new transaction with or without a specific payment method.

## Usage details

### 💳 Transactions
#### Create transaction with a specific payment method

```typescript
import {Client} from 'bml-conntect-ts';

const client = new Client('apikey', 'appid');

const data = {
  provider: 'alipay',  // Payment method enabled for your merchant account such as bcmc, alipay, card
  currency: 'MVR',
  amount: 1000, // 10.00 MVR
  redirectUrl: 'https://foo.bar/order/123'
}

const transaction = client.transactions.create(data);

res.location(transaction.url);
```

#### Create transaction without a payment method that will redirect to the payment method selection screen

```typescript
import {Client} from 'bml-conntect-ts';

const client = new Client('apikey', 'appid');

const data = {
  currency: 'MVR',
  amount: 1000, // 10.00 MVR
  redirectUrl: 'https://foo.bar/order/123'
}
const transaction = client.transactions.create(data);

res.location(transaction.url); // Go to payment method selection screen

```


## About

⭐ Sign up as a merchant at https://dashboard.merchants.bankofmaldives.com.mv and start receiving payments in seconds.
