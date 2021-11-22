import { testnet } from '../lib/stacks';

export const ATX_CONTRACTS = {
  deployer: testnet ? 'ST2NJ50P1WY54JRD21GDKFB1SQ6JFPR8EVFRHA42R' : '',
  coreContract: 'austincoin-core-v1',
  authContract: 'austincoin-auth',
  tokenContract: 'austincoin-token',
};

export const ATX_TOKEN = {
  name: 'austincoin',
  symbol: 'ATX',
};

export const ATX_CONFIG = {
  cityName: 'Austin',
  cityWallet: testnet ? 'ST1G30S8ST76AD665P2ARA9R255E4747E15HJBYS2' : '',
  halving: 210000,
  rewardCycleLength: 2100,
  startBlock: testnet ? 19302 : 0,
};
