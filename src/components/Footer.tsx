const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-cyber-light">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyber-orange to-cyber-cyan rounded-lg flex items-center justify-center">
              <span className="text-cyber-dark font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-bold text-cyber-gradient">WESED</span>
          </div>
          
          <p className="text-muted-foreground text-center">
            © 2024 WESED. Crafted with passion and modern technology.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-cyber-orange transition-cyber">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-cyber-orange transition-cyber">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;