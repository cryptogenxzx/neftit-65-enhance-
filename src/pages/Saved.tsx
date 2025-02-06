
import { MainNav } from "@/components/layout/MainNav";
import { NFTCard } from "@/components/nft/NFTCard";
import { useEffect, useState } from "react";

const Saved = () => {
  const [savedNFTs, setSavedNFTs] = useState<any[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('savedNFTs') || '[]');
    setSavedNFTs(items);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212]">
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gradient">
              Saved NFTs
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Your collection of saved NFTs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {savedNFTs.map((nft) => (
              <NFTCard key={nft.id} {...nft} />
            ))}
          </div>

          {savedNFTs.length === 0 && (
            <div className="text-center text-white/70 py-12">
              No saved NFTs yet
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Saved;
