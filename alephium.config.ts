import { Configuration } from '@alephium/cli'

export type Settings = {}

const configuration: Configuration<Settings> = {
  networks: {
    devnet: {
      //Make sure the two values match what's in your devnet configuration
      nodeUrl: 'http://localhost:22973',
      networkId: 2
    }
  }
}

export default configuration
