import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Outstanding work! The developer delivered a cutting-edge solution that exceeded our expectations. Professional, reliable, and highly skilled.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "CTO, Innovation Labs",
    content: "Exceptional attention to detail and modern development practices. Our project was delivered on time and the code quality is top-notch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, Digital Solutions",
    content: "Great communication throughout the project. The final product was exactly what we envisioned, with some excellent suggestions that improved the overall UX.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-cyber-gradient">TESTIMONIALS</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            What clients say about working with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-cyber-dark border-cyber-light hover:border-cyber-orange transition-cyber hover:shadow-cyber p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyber-orange text-cyber-orange" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-cyber-orange"
                />
                <div>
                  <h4 className="font-semibold text-cyber-orange">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;