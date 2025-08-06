import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "#",
    live: "#"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI integration and modern UI/UX design",
    technologies: ["Next.js", "OpenAI", "WebSocket", "TypeScript"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    github: "#",
    live: "#"
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with advanced analytics",
    technologies: ["Vue.js", "Python", "FastAPI", "WebSocket"],
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop",
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-cyber-gradient">PROJECTS</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my latest work and innovations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-cyber-dark border-cyber-light hover:border-cyber-orange transition-cyber group overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-cyber"
                />
                <div className="absolute inset-0 bg-cyber-dark/40 group-hover:bg-cyber-dark/20 transition-cyber"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyber-orange">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-cyber-light text-cyber-cyan text-sm rounded border border-cyber-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="cyberOutline" size="sm">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="cyber" size="sm">
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;