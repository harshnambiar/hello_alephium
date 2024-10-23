import { Deployments } from '@alephium/cli'
import { DUST_AMOUNT, web3, NodeProvider } from '@alephium/web3'
import { PrivateKeyWallet} from '@alephium/web3-wallet'
import configuration from '../alephium.config'
import { CounterRalph } from '../artifacts/ts'

async function increment() {

  //Select our network defined in alephium.config.ts
  const network = configuration.networks.testnet

  //NodeProvider is an abstraction of a connection to the Alephium network
  const nodeProvider = new NodeProvider('https://wallet-v20.testnet.alephium.org')

  //Sometimes, it's convenient to setup a global NodeProvider for your project:
  web3.setCurrentNodeProvider(nodeProvider)

  //Connect our wallet, typically in a real application you would connect your web-extension or desktop wallet
  const key: string = (process.env.PK as string) || "no key found";
  const wallet = new PrivateKeyWallet({privateKey: key })

  //.deployments contains the info of our `TokenFaucet` deployement, as we need to now the contractId and address
  //This was auto-generated with the `cli deploy` of our `scripts/0_deploy_faucet.ts`
  const deployments = await Deployments.load(configuration, 'testnet')
	console.log(deployments)
  //Make sure it match your address group
  const accountGroup = 3

  const deployed = deployments.getDeployedContractResult(accountGroup, 'CounterRalph')

  if(deployed !== undefined) {
    const counterId = deployed.contractInstance.contractId
    const counterAddress = deployed.contractInstance.address
    console.log(counterId)
    console.log("bye")

    //await CounterRalph.execute(wallet, {
     // initialFields: { token: tokenId, amount: 1n },
      //attoAlphAmount: DUST_AMOUNT
    //})

    // Fetch the latest state of the token contract, `mut balance` should have change
    const counter = CounterRalph.at(counterAddress)
    const state = await counter.fetchState()
    console.log(state.fields)

   
    console.log("au revoir")
  } else {
    console.log('`deployed` is undefined')
  }
}

// Let's perform one increment
increment()
