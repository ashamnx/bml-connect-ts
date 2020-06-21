import { Transaction } from '../model/transaction'
import { createHash, Utf8AsciiLatin1Encoding } from 'crypto'

export class Signature {
  private transaction!: Transaction
  private readonly apiKey!: string

  constructor(transaction: Transaction, apiKey: string) {
    this.transaction = transaction
    this.apiKey = apiKey
  }

  public sign() {
    const params = `amount=${this.transaction.amount}&currency=${this.transaction.currency}&apiKey=${this.apiKey}`
    return this.sha1(params)
  }

  private sha1(data: string) {
    return createHash('sha1').update(data, <Utf8AsciiLatin1Encoding>'binary').digest('hex')
  }

}
