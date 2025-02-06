import { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  isConnected: boolean;
  connect: (walletType: string) => Promise<void>;
  disconnect: () => void;
  address: string | null;
}

const WalletContext = createContext<WalletContextType>({
  isConnected: false,
  connect: async () => {},
  disconnect: () => {},
  address: null,
});

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const connect = async (walletType: string) => {
    try {
      // Mock wallet connection - in a real app, you would implement actual wallet connection logic
      console.log(`Connecting to ${walletType}...`);
      setIsConnected(true);
      setAddress('0x1234...5678'); // Mock address
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setIsConnected(false);
      setAddress(null);
    }
  };

  const disconnect = () => {
    setIsConnected(false);
    setAddress(null);
  };

  return (
    <WalletContext.Provider value={{ isConnected, connect, disconnect, address }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);