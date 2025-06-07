import { Keypair } from '@solana/web3.js'
import bs58 from 'bs58'
export const createNewWallet = () => {
  const newWallet = Keypair.generate()
  console.log(newWallet)
  return newWallet
}

export const importExistingWallet = (secretKey: string) => {
  const secretKeyArray = new Uint8Array(
    secretKey.split(',').map((num) => parseInt(num.trim(), 10)),
  )
  const importExistingWallet = Keypair.fromSecretKey(secretKeyArray)
  // console.log(importExistingWallet)
  return importExistingWallet
}
