import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-cyber-darker">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-cyber-gradient">CONTACT</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's build something amazing together
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-cyber-orange mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Ready to start your next project? I'm always open to discussing new opportunities 
                and innovative ideas. Let's create something extraordinary together.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyber-orange rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyber-dark" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">hello@developer.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyber-cyan rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyber-dark" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyber-purple rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-6">
              <Button variant="cyberOutline" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="cyberOutline" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="cyberOutline" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-cyber-dark border-cyber-light p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    className="bg-cyber-light border-cyber-light focus:border-cyber-orange"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    className="bg-cyber-light border-cyber-light focus:border-cyber-orange"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  className="bg-cyber-light border-cyber-light focus:border-cyber-orange"
                  placeholder="Project discussion"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  className="bg-cyber-light border-cyber-light focus:border-cyber-orange min-h-32"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;