import { useState, useEffect } from "react";
import { ethers } from "ethers";

const WalletConnect = () => {
    const [wallet, setWallet] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                setWallet(accounts[0]);
            } catch (error) {
                console.error("Wallet Connection Error:", error);
            }
        } else {
            alert("MetaMask not detected. Please install it.");
        }
    };

    return (
        <div>
            {wallet ? (
                <p>Connected: {wallet.slice(0, 6)}...{wallet.slice(-4)}</p>
            ) : (
                <button onClick={connectWallet}>Connect Wallet</button>
            )}
        </div>
    );
};

export default WalletConnect;
