import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cyberpunk.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [afterFiveSeconds, setafterFiveSeconds] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setafterFiveSeconds(true);
    }, 5000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-cyber-dark/60"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--cyber-cyan))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--cyber-cyan))_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-wider">
            <span className="text-cyber-gradient">DEVELOPER</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 tracking-widest uppercase">
            Modern • Experienced • Web Developer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="min-w-48">
              View My Work
            </Button>
            <Button variant="cyberOutline" size="xl" className="min-w-48">
              Download CV
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyber-orange rounded-full animate-float opacity-60"></div>
        <div
          className="absolute bottom-32 right-32 w-3 h-3 bg-cyber-cyan rounded-full animate-float opacity-80"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-2 h-2 bg-cyber-purple rounded-full animate-float opacity-70"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          showScrollIndicator && afterFiveSeconds ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transition: "opacity 100ms ease-in-out",
        }}
      >
        <div className="w-6 h-10 border-2 border-cyber-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
