import { FrameMetadataType } from '@coinbase/onchainkit';
import { baseSepolia } from 'viem/chains';
export const FARCASTER_ID_REGISTRY = '0x00000000fc6c5f01fc30151999387bb99a9f489b';
export const VERCEL_URL = process.env.NEXT_PUBLIC_FRAME_URL || 'http://localhost:3000';
export const DEFAULT_FRAME = {
  buttons: [
    {
      label: 'see results',
    },
  ],
  image: {
    src: `${VERCEL_URL}/api/og`,
  },
  postUrl: `${VERCEL_URL}/api/frame`,
} as FrameMetadataType;
export const FRAME_INPUT_PLACEHOLDER = '0x... or .eth';
export const CHAIN = baseSepolia;
export const DROP = '0x2B4Bf16393815090f8B9b1aECe118a6076e81BD9';
export const MINTER = '0xcF3275597ce253F04849cE4A278e838771890203';
export const USDC = '0x63148156DACb0e8555287906F8FC229E0b11365b';
export const SOUND_FACTORY = '0x0000000000aec84F5BFc2af15EAfb943bf4e3522';
export const PRICE = 1000000000000000000n;
export const AIRSTACK_API_URL = 'https://api.airstack.xyz/graphql';
