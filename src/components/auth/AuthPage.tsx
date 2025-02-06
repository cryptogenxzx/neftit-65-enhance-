import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export function AuthPage() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (method: string) => {
    localStorage.setItem("isAuthenticated", "true");
    toast({
      title: "Login Successful",
      description: `Logged in with ${method}`,
    });
    navigate("/");
  };

  const socialLogins = [
    {
      name: "Google",
      icon: "/lovable-uploads/google.svg",
      onClick: () => handleLogin("Google")
    },
    {
      name: "Discord",
      icon: "/lovable-uploads/discord.svg",
      onClick: () => handleLogin("Discord")
    },
    {
      name: "Twitter",
      icon: "/lovable-uploads/twitter.svg",
      onClick: () => handleLogin("Twitter")
    },
    {
      name: "Telegram",
      icon: "/lovable-uploads/telegram.svg",
      onClick: () => handleLogin("Telegram")
    }
  ];

  const wallets = [
    {
      name: "Phantom",
      icon: "/lovable-uploads/phantom.svg",
      status: "Multi Chain",
      onClick: () => handleLogin("Phantom")
    },
    {
      name: "Metamask",
      icon: "/lovable-uploads/metamask.svg",
      status: "Installed",
      onClick: () => handleLogin("Metamask")
    },
    {
      name: "Keplr",
      icon: "/lovable-uploads/keplr.svg",
      status: "Installed",
      onClick: () => handleLogin("Keplr")
    },
    {
      name: "Trust Wallet",
      icon: "/lovable-uploads/trust-wallet.svg",
      status: "Multi Chain",
      onClick: () => handleLogin("Trust Wallet")
    },
    {
      name: "All Wallets",
      icon: "/lovable-uploads/all-wallets.svg",
      status: "9+",
      onClick: () => handleLogin("Other Wallet")
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80">
      <Dialog open={true}>
        <DialogContent className="sm:max-w-[425px] bg-[#1A1B1E] text-white border-0">
          <DialogHeader className="relative">
            <DialogTitle className="text-xl font-semibold text-center">LOGIN OR SIGN UP</DialogTitle>
            <Button 
              variant="ghost" 
              className="absolute right-0 top-0 opacity-70 hover:opacity-100 p-0 h-auto"
              onClick={() => navigate("/")}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Social Logins */}
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full bg-[#2A2B2F] hover:bg-[#2A2B2F]/90 border-0 text-white h-12"
                onClick={() => handleLogin("Google")}
              >
                <img src="/lovable-uploads/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </Button>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLogins.slice(1).map((login) => (
                  <Button
                    key={login.name}
                    variant="outline"
                    className="bg-[#2A2B2F] hover:bg-[#2A2B2F]/90 border-0"
                    onClick={login.onClick}
                  >
                    <img src={login.icon} alt={login.name} className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-700"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#1A1B1E] px-2 text-gray-400">OR</span>
              </div>
            </div>

            {/* Wallets */}
            <div className="space-y-3">
              {wallets.map((wallet) => (
                <Button
                  key={wallet.name}
                  variant="outline"
                  className="w-full bg-[#2A2B2F] hover:bg-[#2A2B2F]/90 border-0 text-white justify-between h-12"
                  onClick={wallet.onClick}
                >
                  <div className="flex items-center gap-2">
                    <img src={wallet.icon} alt={wallet.name} className="w-5 h-5" />
                    {wallet.name}
                  </div>
                  <span className={`text-sm ${
                    wallet.status === "Installed" ? "text-purple-400" :
                    wallet.status === "Multi Chain" ? "text-yellow-400" :
                    "text-gray-400"
                  }`}>
                    {wallet.status}
                  </span>
                </Button>
              ))}
            </div>

            {/* Terms */}
            <p className="text-center text-sm text-gray-400">
              By logging in, you agree to our{" "}
              <a href="#" className="text-white hover:underline">Terms of Service</a>
              {" & "}
              <a href="#" className="text-white hover:underline">Privacy Policy</a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}