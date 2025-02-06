import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Wallet, WalletCards } from "lucide-react";

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false);

  const mockWallets = [
    { id: 'metamask', name: 'MetaMask', icon: '🦊' },
    { id: 'phantom', name: 'Phantom', icon: '👻' },
    { id: 'walletconnect', name: 'WalletConnect', icon: '🔗' },
  ];

  const handleConnect = (walletId: string) => {
    console.log(`Connecting to ${walletId}`);
    // Here you would implement actual wallet connection logic
    setIsConnected(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="gap-2"
        >
          {isConnected ? (
            <>
              <Wallet className="h-4 w-4" />
              <span>Connected</span>
            </>
          ) : (
            <>
              <WalletCards className="h-4 w-4" />
              <span>Connect Wallet</span>
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {mockWallets.map((wallet) => (
            <Button
              key={wallet.id}
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={() => handleConnect(wallet.id)}
            >
              <span>{wallet.icon}</span>
              <span>{wallet.name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}