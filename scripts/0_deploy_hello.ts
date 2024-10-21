import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { CounterRalph } from '../artifacts/ts'

// This deploy function will be called by cli deployment tool automatically
// Note that deployment scripts should prefixed with numbers (starting from 0)
const deployCounter: DeployFunction<Settings> = async (
  deployer: Deployer
): Promise<void> => {
  const result = await deployer.deployContract(CounterRalph, {
    
    
    // The initial state of the hello contract
    initialFields: {
      counter: 0n
    }
  })
  console.log('CounterRalph contract id: ' + result.contractInstance.contractId)
  console.log('CounterRalph contract address: ' + result.contractInstance.address)
}

export default deployCounter
