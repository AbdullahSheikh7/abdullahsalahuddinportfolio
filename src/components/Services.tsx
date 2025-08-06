import { Card } from "@/components/ui/card";
import { Code, Smartphone, Globe, Database, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom web applications using modern frameworks and technologies"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Cross-platform mobile apps with React Native and Flutter"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "API Development",
    description: "RESTful and GraphQL APIs with proper documentation and testing"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Design",
    description: "Efficient database architecture and optimization strategies"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Speed optimization and performance enhancement for existing applications"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security Consulting",
    description: "Security audits and implementation of best security practices"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-cyber-darker">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-cyber-gradient">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive development solutions for your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-cyber-dark border-cyber-light hover:border-cyber-orange transition-cyber hover:shadow-cyber group p-6"
            >
              <div className="text-cyber-orange group-hover:text-cyber-cyan transition-cyber mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-cyber-orange">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;