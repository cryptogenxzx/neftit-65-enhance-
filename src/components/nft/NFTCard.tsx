
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Save } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  creator: {
    name: string;
    image: string;
  };
  xp: number;
  neft: number;
  backgroundColor: string;
}

export function NFTCard({ id, name, image, creator, xp, neft, backgroundColor }: NFTCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    // Get existing saved items from localStorage
    const savedItems = JSON.parse(localStorage.getItem('savedNFTs') || '[]');
    
    if (!isSaved) {
      // Add the item to saved items
      savedItems.push({ id, name, image, creator, xp, neft, backgroundColor });
      localStorage.setItem('savedNFTs', JSON.stringify(savedItems));
      setIsSaved(true);
      toast.success('NFT saved successfully!');
    } else {
      // Remove the item from saved items
      const filteredItems = savedItems.filter((item: { id: string }) => item.id !== id);
      localStorage.setItem('savedNFTs', JSON.stringify(filteredItems));
      setIsSaved(false);
      toast.info('NFT removed from saved items');
    }
  };

  // Check if item is already saved when component mounts
  useState(() => {
    const savedItems = JSON.parse(localStorage.getItem('savedNFTs') || '[]');
    const isItemSaved = savedItems.some((item: { id: string }) => item.id === id);
    setIsSaved(isItemSaved);
  });

  return (
    <Card className={cn("border-0 overflow-hidden transition-all duration-300 hover:scale-[1.02]", backgroundColor)}>
      <div className="p-4 space-y-4">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
          <button 
            onClick={handleSave}
            className="absolute top-3 right-3 p-1.5 rounded-md bg-black/20 hover:bg-black/40 transition-colors"
          >
            <Bookmark 
              className={cn(
                "h-4 w-4", 
                isSaved ? "text-primary fill-primary" : "text-white"
              )} 
            />
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img
              src={creator.image}
              alt={creator.name}
              className="w-5 h-5 rounded-full"
            />
            <span className="text-sm font-medium text-white/90">{creator.name}</span>
          </div>
          
          <h3 className="font-semibold text-white/90 line-clamp-2">
            {name}
          </h3>
          
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
              {xp} XPs
            </Badge>
            <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
              {neft} NEFT
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
