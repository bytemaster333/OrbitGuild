export function genErc20Yaml(cfg: {
  chain: { label: string; chainId: number; rpcUrl: string };
  deployer: { keyEnv: string };
  token: { name: string; symbol: string; decimals: number; initialSupply: string; owner: string };
}) {
  const { chain, deployer, token } = cfg;
  return `action: deploy_token
standard: "ERC20"
chain:
  label: "${chain.label}"
  chainId: ${chain.chainId}
  rpcUrl: "${chain.rpcUrl}"
deployer:
  keyEnv: "${deployer.keyEnv}"
token:
  name: "${token.name}"
  symbol: "${token.symbol}"
  decimals: ${token.decimals}
  initialSupply: "${token.initialSupply}"
  owner: "${token.owner}"
safety:
  dryRun: false
`;
}

export function genDeployScript() {
  return `// deploy-token.js (placeholder for MVP)
// Usage: node deploy-token.js --config token.yml
import fs from 'fs';
import yaml from 'js-yaml';
// import { ethers } from 'ethers';

const args = process.argv.slice(2);
const idx = args.indexOf('--config');
if (idx === -1 || !args[idx+1]) {
  console.error('Usage: node deploy-token.js --config token.yml');
  process.exit(1);
}

const file = args[idx+1];
const doc = yaml.load(fs.readFileSync(file, 'utf8'));

console.log('=== Orbit Guild – Deploy ERC-20 (MVP) ===');
console.log('Chain:', doc.chain);
console.log('Deployer key env:', doc.deployer?.keyEnv);
console.log('Token:', doc.token);
console.log('\\nPretend deploying with ethers…');
// const provider = new ethers.JsonRpcProvider(doc.chain.rpcUrl);
// const wallet = new ethers.Wallet(process.env[doc.deployer.keyEnv], provider);
// TODO: compile/deploy actual ERC-20 here in real version
console.log('Tx mined: 0xabc123...');
console.log('Contract deployed at: 0xDeF123...');
`;
}
