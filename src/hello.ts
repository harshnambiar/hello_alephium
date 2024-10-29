import { Deployments } from '@alephium/cli'
import { DUST_AMOUNT, web3, NodeProvider, ONE_ALPH } from '@alephium/web3'
import { PrivateKeyWallet} from '@alephium/web3-wallet'
import configuration from '../alephium.config'
import { CounterRalph } from '../artifacts/ts'

async function display_counter() {
  console.log('init display')
  //Select our network defined in alephium.config.ts
  const network = configuration.networks.testnet

  //NodeProvider is an abstraction of a connection to the Alephium network
  // wallet-v20 is one of the only working links right now for the testnet so let's leave it at that
  const nodeProvider = new NodeProvider('https://wallet-v20.testnet.alephium.org')

  //Sometimes, it's convenient to setup a global NodeProvider for your project:
  web3.setCurrentNodeProvider(nodeProvider)

  //Connect our wallet, typically in a real application you would connect your web-extension or desktop wallet
  const key: string = (process.env.PK as string) || "no key found";
  const wallet = new PrivateKeyWallet({privateKey: key })

  //.deployments contains the info of our `CounterRalph` deployement, as we need to now the contractId and address
  //This was auto-generated with the `cli deploy` of our `scripts/0_deploy_hello.ts`
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

    
    // Fetch the latest state of the token contract, `mut counter` should have change
    const counter = CounterRalph.at(counterAddress)
    const state = await counter.fetchState()
    console.log(state.fields)

   
    console.log("au revoir")
  } else {
    console.log('`deployed` is undefined')
  }
}


async function increment_counter() {
	console.log('init increment');
  //Select our network defined in alephium.config.ts
  const network = configuration.networks.testnet

  //NodeProvider is an abstraction of a connection to the Alephium network
  const nodeProvider = new NodeProvider('https://wallet-v20.testnet.alephium.org')

  //Sometimes, it's convenient to setup a global NodeProvider for your project:
  web3.setCurrentNodeProvider(nodeProvider)

  //Connect our wallet, typically in a real application you would connect your web-extension or desktop wallet
  const key: string = (process.env.PK as string) || "no key found";
  const wallet = new PrivateKeyWallet({privateKey: key, nodeProvider})

  //.deployments contains the info of our `TokenFaucet` deployement, as we need to now the contractId and address
  //This was auto-generated with the `cli deploy` of our `scripts/0_deploy_faucet.ts`
  const deployments = await Deployments.load(configuration, 'testnet')
	
  //Make sure it match your address group
  const accountGroup = 3

  const deployed = deployments.getDeployedContractResult(accountGroup, 'CounterRalph')

  if(deployed !== undefined) {
    const counterId = deployed.contractInstance.contractId
    const counterAddress = deployed.contractInstance.address

    const counter = CounterRalph.at(counterAddress)
    await counter.transact.incrementCounter({
    	signer: wallet,
   	//args: { },
   	attoAlphAmount: ONE_ALPH + DUST_AMOUNT
   })
	
   
    console.log("au revoir 2")
  } else {
    console.log('`deployed` is undefined')
  }
}


async function reset_counter() {
	console.log('init reset');
  //Select our network defined in alephium.config.ts
  const network = configuration.networks.testnet

  //NodeProvider is an abstraction of a connection to the Alephium network
  const nodeProvider = new NodeProvider('https://wallet-v20.testnet.alephium.org')

  //Sometimes, it's convenient to setup a global NodeProvider for your project:
  web3.setCurrentNodeProvider(nodeProvider)

  //Connect our wallet, typically in a real application you would connect your web-extension or desktop wallet
  const key: string = (process.env.PK as string) || "no key found";
  const wallet = new PrivateKeyWallet({privateKey: key, nodeProvider})

  //.deployments contains the info of our `CounterRalph` deployement, as we need to now the contractId and address
  //This was auto-generated with the `cli deploy` of our `scripts/0_deploy_hello.ts`
  const deployments = await Deployments.load(configuration, 'testnet')
	
  //Make sure it match your address group
  const accountGroup = 3

  const deployed = deployments.getDeployedContractResult(accountGroup, 'CounterRalph')

  if(deployed !== undefined) {
    const counterId = deployed.contractInstance.contractId
    const counterAddress = deployed.contractInstance.address

    const counter = CounterRalph.at(counterAddress)
    await counter.transact.resetCounter({
    	signer: wallet,
   	//args: { },
   	attoAlphAmount: ONE_ALPH + DUST_AMOUNT
   })
	
   
    console.log("au revoir 3")
  } else {
    console.log('`deployed` is undefined')
  }
}

// Let's perform one operation at a time while commenting the others out
display_counter()
//increment_counter()
//reset_counter()
