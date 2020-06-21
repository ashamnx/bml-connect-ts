export interface TransactionType {
  signature?: string;
  amount: number;
  currency: string;
  isPreAuthorization?: string;
  redirectUrl?: string;
  provider?: string;
  localId?: string;
}

export class Transaction {
  constructor({ amount, currency, isPreAuthorization, redirectUrl, provider, localId }: TransactionType) {
    if (amount && currency) {
      this._amount = amount
      this._currency = currency
    } else {
      throw new Error('amount and currency are required to sign a transaction')
    }

    if (isPreAuthorization) {
      this._isPreAuthorization = isPreAuthorization
    }

    if (redirectUrl) {
      this._redirectUrl = redirectUrl
    }

    if (provider) {
      this._provider = provider
    }

    if (localId) {
      this._localId = localId
    }

    if (localId) {
      this._isPreAuthorization = localId
    }

    return this
  }

  private _amount!: number

  get amount() {
    return this._amount
  }

  set amount(amount) {
    this._amount = amount
  }

  private _currency!: string

  get currency() {
    return this._currency
  }

  set currency(currency) {
    this._currency = currency
  }

  private _isPreAuthorization!: string

  get isPreAuthorization() {
    return this._isPreAuthorization
  }

  set isPreAuthorization(preAuthorization) {
    this._isPreAuthorization = preAuthorization
  }

  private _provider!: string

  get provider() {
    return this._provider
  }

  set provider(provider) {
    this._provider = provider
  }

  private _redirectUrl!: string

  get redirectUrl() {
    return this._redirectUrl
  }

  set redirectUrl(redirectUrl) {
    this._redirectUrl = redirectUrl
  }

  private _localId!: string

  get localId() {
    return this._localId
  }

  set localId(localId) {
    this._localId = localId
  }

}
