import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-light">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyber-orange to-cyber-cyan rounded-lg flex items-center justify-center">
              <span className="text-cyber-dark font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-bold text-cyber-gradient">WESED</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-cyber-orange transition-cyber">
              Home
            </a>
            <a href="#projects" className="text-foreground hover:text-cyber-orange transition-cyber">
              Projects
            </a>
            <a href="#services" className="text-foreground hover:text-cyber-orange transition-cyber">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-cyber-orange transition-cyber">
              About
            </a>
          </div>
          
          <Button variant="cyber" size="lg">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;