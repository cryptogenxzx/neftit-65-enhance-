import { Trophy, Star } from "lucide-react";

interface ProfileHeaderProps {
  username: string;
  xp: number;
  neftPoints: number;
  avatar?: string;
}

export function ProfileHeader({ username, xp, neftPoints, avatar }: ProfileHeaderProps) {
  return (
    <div className="glass rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src={avatar || "/placeholder.svg"}
            alt={username}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{username}</h1>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary" />
              <span>{xp} XP</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent" />
              <span>{neftPoints} Points</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}