import { TransactionType } from './model/transaction'
import axios from 'axios'
import { Transactions } from './transactions'

export interface ClientConfig {
  apiKey: string,
  appId: string,
  mode?: 'production' | 'sandbox',
}

export interface Pagination {
  page: number
}

export interface CreateTransactionResponse {
  created: string,
  updated: string,
  updatedKeys: string[],
  deleted: boolean,
  amount: number,
  merchantId: string,
  currency: string,
  payCurrency: string,
  provider: string,
  providerHistory: any[],
  state: string,
  accountingState: string,
  qr: any,
  securityWord: string,
  excludeFromRemittance: boolean,
  canRefundIfConfirmed: boolean,
  externalImport: boolean,
  merchantDiscountRateCode: string,
  externalId: string,
  localId: string,
  paymentToken: string,
  history: any[],
  appVersion: string,
  apiVersion: string,
  deviceId: string,
  originalDeviceId: string,
  costStructure: string,
  providerDisplayName: string,
  remittanceId: string,
  orderInfo: string,
  originatorApp: string,
  refundId: string,
  refundReason: string,
  vendorQrCode: string,
  resellerMetadata: {},
  subTotal: number,
  taxesTotal: number,
  serviceChargeTotal: number,
  paymentLinks: [],
  initiator: string,
  url: string,
  mustReview: boolean,
  quickCancel: boolean,
  isWalletScan: boolean,
  announceWalletScanToProvider: boolean,
  initiatorDetails: string,
  expires: string,
  customerReference: string,
  hasError: boolean,
  allowRetry: boolean,
  threeDSecure: string,
  paddedCardNumber: string,
  providerBrandName: string,
  buyerIdentifier: string,
  tokenizationMethod: string,
  isPreAuthorization: boolean,
  isPaymentLink: string,
  preauthorizedAmount: number,
  preauthorizedExpiryDate: string,
  fxOrder: string,
  vendorUrl: string,
  payAmount: number,
  rating: string,
  signMethod: string,
  preauthorizedExpiryDateAlertOne: string,
  preauthorizedExpiryDateAlertTwo: string,
  dcc: string,
  implicitDcc: string,
  shiftId: string,
  capturedAmount: number,
  urlHash: string,
  shortUrl: string,
  id: string
}

export class Client {
  public transactions: Transactions
  protected BML_API_VERSION = '2.0'
  protected BML_APP_VERSION = 'bml-connect-ts'
  protected BML_SIGN_METHOD = 'sha1'
  protected BML_SANDBOX_ENDPOINT = 'https://api.uat.merchants.bankofmaldives.com.mv/public/'
  protected BML_PRODUCTION_ENDPOINT = 'https://api.merchants.bankofmaldives.com.mv/public/'
  private readonly apiKey: string
  private appId: string
  private mode: string
  private readonly baseUrl: string
  private httpHeader: any

  constructor({
                apiKey,
                appId,
                mode = 'production'
              }: ClientConfig) {
    this.apiKey = apiKey
    this.appId = appId
    this.mode = mode
    this.baseUrl = mode === 'production' ? this.BML_PRODUCTION_ENDPOINT : this.BML_SANDBOX_ENDPOINT
    this.setHeader()

    this.transactions = new Transactions(this)
  }

  public getApiKey(): string {
    return this.apiKey
  }

  async post(endpoint: string, data: TransactionType): Promise<CreateTransactionResponse> {
    const json = {
      ...data,
      apiVersion: this.BML_API_VERSION,
      appVersion: this.BML_APP_VERSION,
      signMethod: this.BML_SIGN_METHOD
    }

    const response = await axios.post<CreateTransactionResponse>(`${this.buildBaseUrl()}${endpoint}`, json, { headers: this.httpHeader })
    return response.data
  }

  async get(endpoint: string, pagination?: Pagination) {
    const response = await axios.get(`${this.buildBaseUrl()}${endpoint}`, {
      params: pagination,
      headers: this.httpHeader
    })
    return response.data
  }

  private setHeader() {
    this.httpHeader = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': this.apiKey
    }
  }

  private buildBaseUrl(): string {
    return this.baseUrl
  }

}
