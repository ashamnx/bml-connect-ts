import { Client } from './client'
import { Transaction, TransactionType } from './model/transaction'
import { Signature } from './crypt/signature'

export class Transactions {
  private readonly ENDPOINT = 'transactions'

  private _client: Client

  constructor(client: Client) {
    this._client = client
  }

  create(data: TransactionType) {
    const transaction = new Transaction(data)
    data.signature = new Signature(transaction, this._client.getApiKey()).sign()
    return this._client.post(this.ENDPOINT, data)
  }

  public getById(id: string) {
    return this._client.get(`${this.ENDPOINT}/${id}`)
  }

  public list(params: { page: number }) {
    return this._client.get(this.ENDPOINT, params)
  }
}
