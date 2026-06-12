"use client";

import type { ReactNode } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { arbitrum } from "wagmi/chains";
import { metaMask, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const connectors = projectId
  ? [walletConnect({ projectId }), metaMask()]
  : [metaMask()];

const config = createConfig({
  chains: [arbitrum],
  connectors,
  transports: {
    [arbitrum.id]: http(),
  },
});

const queryClient = new QueryClient();

export function CustomWagmiProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}