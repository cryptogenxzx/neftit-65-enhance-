
import { MainNav } from "@/components/layout/MainNav";
import { NFTCard } from "@/components/nft/NFTCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  const featuredNFTs = [
    {
      id: "1",
      name: "NEFT Wallet $1,500 Giveaway",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c",
      creator: {
        name: "NEFT Wallet",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      },
      xp: 120,
      neft: 1500,
      backgroundColor: "bg-emerald-500/20",
    },
    {
      id: "2",
      name: "Digital Genesis Launch Campaign",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032",
      creator: {
        name: "Genesis Network",
        image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
      },
      xp: 30,
      neft: 200,
      backgroundColor: "bg-violet-500/20",
    },
    {
      id: "3",
      name: "Lunar New Year Campaign 🎊",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c",
      creator: {
        name: "Prodigy",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      },
      xp: 50,
      neft: 390,
      backgroundColor: "bg-orange-500/20",
    },
    {
      id: "4",
      name: "NEFT Giveaway $1000",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032",
      creator: {
        name: "4ARTCoin",
        image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
      },
      xp: 90,
      neft: 1000,
      backgroundColor: "bg-purple-500/20",
    },
    {
      id: "5",
      name: "Challenge Series",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c",
      creator: {
        name: "Accumulate",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      },
      xp: 75,
      neft: 300,
      backgroundColor: "bg-emerald-500/20",
    },
    {
      id: "6",
      name: "Gateway Program",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032",
      creator: {
        name: "Blazpay",
        image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
      },
      xp: 45,
      neft: 250,
      backgroundColor: "bg-violet-500/20",
    },
    {
      id: "7",
      name: "Explore Mainnet",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c",
      creator: {
        name: "Academy",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      },
      xp: 60,
      neft: 150,
      backgroundColor: "bg-orange-500/20",
    },
    {
      id: "8",
      name: "Road To TGE",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032",
      creator: {
        name: "RadarDrop",
        image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
      },
      xp: 85,
      neft: 450,
      backgroundColor: "bg-purple-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212]">
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gradient">
              Discover NFTs and Earn Rewards
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join the future of digital collectibles with our curated marketplace
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass p-2 flex gap-2 rounded-full">
              <Input
                placeholder="Search collections and creators..."
                className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
              />
              <Button size="icon" className="rounded-full">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredNFTs.map((nft) => (
              <NFTCard key={nft.id} {...nft} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
