import { ArrowRight, Download, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 gradient-primary rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-scale-in">
              <Star className="w-4 h-4 mr-2" />
              Award-Winning Mobile Apps
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-delayed">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Innovative Mobile
              </span>
              <br />
              <span className="text-foreground">Applications</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-delayed">
              Magiban Technologies crafts cutting-edge mobile applications that transform ideas into 
              engaging digital experiences. From puzzle games to productivity tools, we deliver 
              quality that makes a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delayed">
              <Button size="lg" className="gradient-primary text-white shadow-glow hover:shadow-xl transition-all duration-300 group">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Our Apps
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 animate-fade-in-delayed">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Published Apps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">4.8</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Magiban Technologies Mobile Apps" 
                className="w-full h-auto rounded-2xl shadow-elegant animate-glow-pulse"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;