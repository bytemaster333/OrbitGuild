export type Issue = { severity: 'error'|'warn'; message: string };
const urlRe = /^https?:\/\/[^\s]+$/i;
const addrRe = /^0x[a-fA-F0-9]{40}$/;

export function validateErc20(input: {
  chainId?: number | string;
  rpcUrl?: string;
  symbol?: string;
  initialSupply?: string;
  owner?: string;
}): Issue[] {
  const issues: Issue[] = [];
  const chainIdNum = typeof input.chainId === 'string' ? Number(input.chainId) : input.chainId;

  if (!Number.isInteger(chainIdNum as number)) issues.push({ severity:'error', message:'chainId must be an integer' });
  if (!input.rpcUrl || !urlRe.test(input.rpcUrl)) issues.push({ severity:'error', message:'rpcUrl must be a valid URL' });
  if (!input.owner || !addrRe.test(input.owner)) issues.push({ severity:'error', message:'owner must be a 0x + 40 hex address' });
  if (input.symbol && input.symbol.length > 11) issues.push({ severity:'warn', message:'symbol should be ≤ 11 chars' });
  if (input.initialSupply && isNaN(Number(input.initialSupply))) issues.push({ severity:'error', message:'initialSupply must be a number string' });

  return issues;
}
