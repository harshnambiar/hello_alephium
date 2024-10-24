import { web3, addressFromContractId } from '@alephium/web3'
import { randomContractId, testAddress } from '@alephium/web3-test'
import { CounterRalph, CounterRalphTypes } from '../artifacts/ts'

describe('unit tests', () => {
	it('blank test', () => {
	
	console.log('just checks if the execution flow is behaving correctly');
	}),
  it('Increments the counter', async () => {

    // Use the correct host and port
    web3.setCurrentNodeProvider('http://127.0.0.1:22973')

    const testContractId = randomContractId()
    const testParams = {
      // a random address that the test contract resides in the tests
      address: addressFromContractId(testContractId),
      // assets owned by the test contract before a test
      initialAsset: { alphAmount: 10n ** 18n, tokens: [{ id: testContractId, amount: 10n }] },
      // initial state of the test contract
      initialFields: {
      	counter: 0n
      },
      // arguments to test the target function of the test contract
      testArgs: { },
      // assets owned by the caller of the function
      inputAssets: [{ address: testAddress, asset: { alphAmount: 10n ** 18n } }]
    }

    const testResult = await CounterRalph.tests.incrementCounter(testParams)
    console.log(testResult)
    
    const contractState0 = testResult.contracts[0] as CounterRalphTypes.State
    expect(contractState0.fields.counter).toEqual(1n)
    const testResult1 = await CounterRalph.tests.incrementCounter({
	  ...testParams,
	  initialFields: contractState0.fields,
	  initialAsset: contractState0.asset,
	})
	const contractState1 = testResult1.contracts[0] as CounterRalphTypes.State
  expect(contractState1.fields.counter).toEqual(2n)
  }),
  it('Resets the counter', async () => {

    // Use the correct host and port
    web3.setCurrentNodeProvider('http://127.0.0.1:22973')

    const testContractId = randomContractId()
    const testParams = {
      // a random address that the test contract resides in the tests
      address: addressFromContractId(testContractId),
      // assets owned by the test contract before a test
      initialAsset: { alphAmount: 10n ** 18n, tokens: [{ id: testContractId, amount: 10n }] },
      // initial state of the test contract
      initialFields: {
      	counter: 0n
      },
      // arguments to test the target function of the test contract
      testArgs: { },
      // assets owned by the caller of the function
      inputAssets: [{ address: testAddress, asset: { alphAmount: 10n ** 18n } }]
    }

    const testResult = await CounterRalph.tests.incrementCounter(testParams)
    console.log(testResult)
    
    const contractState0 = testResult.contracts[0] as CounterRalphTypes.State
    expect(contractState0.fields.counter).toEqual(1n)
    const testResult1 = await CounterRalph.tests.resetCounter({
	  ...testParams,
	  initialFields: contractState0.fields,
	  initialAsset: contractState0.asset,
	})
	const contractState1 = testResult1.contracts[0] as CounterRalphTypes.State
  expect(contractState1.fields.counter).toEqual(0n)
  })
  
})
