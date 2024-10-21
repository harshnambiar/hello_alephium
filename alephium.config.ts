import { Configuration } from '@alephium/cli'
import * as dotenv from 'dotenv'
dotenv.config()

export type Settings = {}


const key: string = (process.env.PK as string);
console.log(key);

const configuration: Configuration<Settings> = {
  networks: {
    devnet: {
      //Make sure the two values match what's in your devnet configuration
      nodeUrl: 'http://localhost:22973',
      networkId: 4,
	privateKeys: [key]
    }
  }
}

export default configuration
