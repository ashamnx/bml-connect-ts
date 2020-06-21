import { Client } from '../src/client'

/**
 * Dummy test
 */
describe('Client test', async () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  const client = new Client({
    apiKey: 'foo',
    appId: 'bar',
    mode: 'sandbox'
  })

  it('Client is instantiable', () => {
    expect(client).toBeInstanceOf(Client)
  })

  const transaction = await client.transactions.create({
    amount: 45.0,
    currency: 'MVR'
  })

  it('Client can create transaction', () => {
    expect(transaction).toBeDefined()
  })
})
