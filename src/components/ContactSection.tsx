import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "hello@magiban.in",
      link: "mailto:hello@magiban.in"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+91 (123) 456-7890",
      link: "tel:+911234567890"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      value: "Bangalore, Karnataka, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="text-foreground">Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have an idea for a mobile app? Want to collaborate? Or just want to say hello? 
            We'd love to hear from you. Let's create the next big thing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8">Ready to Start Your Project?</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="group border-0 shadow-elegant hover:shadow-xl transition-all duration-500 animate-fade-in bg-gradient-to-r from-card to-card/80"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-1">
                          {info.description}
                        </p>
                        {info.link !== "#" ? (
                          <a 
                            href={info.link}
                            className="text-primary hover:text-secondary transition-colors duration-300 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 animate-fade-in-delayed">
              <div className="flex items-start space-x-4">
                <MessageSquare className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Why Choose Magiban Technologies?</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Expert team with years of mobile app development experience</li>
                    <li>• Cutting-edge technology and modern development practices</li>
                    <li>• User-centric design approach for maximum engagement</li>
                    <li>• End-to-end support from concept to app store deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-elegant hover:shadow-xl transition-all duration-500 animate-slide-in-right bg-gradient-to-br from-card to-card/50">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="border-border/50 focus:border-primary transition-colors duration-300" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="border-border/50 focus:border-primary transition-colors duration-300" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="border-border/50 focus:border-primary transition-colors duration-300" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full px-3 py-2 border border-border/50 rounded-md focus:border-primary focus:outline-none transition-colors duration-300 bg-background">
                    <option>Mobile App Development</option>
                    <option>Game Development</option>
                    <option>Educational App</option>
                    <option>Productivity App</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project idea..." 
                    rows={4}
                    className="border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gradient-primary text-white shadow-glow hover:shadow-xl transition-all duration-300 group"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;