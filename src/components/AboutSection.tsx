import { Code, Users, Trophy, Target, Lightbulb, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of mobile technology to create unique and engaging experiences."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Quality is at the heart of everything we do. We deliver products that exceed expectations."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every decision we make is guided by our commitment to creating meaningful user experiences."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We believe in creating applications that make a real difference in people's daily lives."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            About Magiban Technologies
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Redefining Digital
            </span>
            <br />
            <span className="text-foreground">Experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Cutting-Edge Software Development
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Magiban Technologies Pvt Ltd is a cutting-edge software development company 
                focused on creating innovative and intuitive mobile applications. Our team is 
                dedicated to designing and developing solutions that meet the needs of our 
                customers in the fields of <span className="text-primary font-medium">gaming</span>, 
                <span className="text-secondary font-medium"> health</span>, 
                <span className="text-accent font-medium"> education</span>, and 
                <span className="text-primary font-medium"> productivity</span>.
              </p>
              <p>
                We believe in delivering high-quality products that make a difference in people's 
                lives. With a passion for technology and a commitment to excellence, we aim to 
                redefine the digital landscape by providing top-notch mobile experiences.
              </p>
              <p>
                Our team of experts is always working to stay ahead of the curve, ensuring our 
                apps are not only functional but also enjoyable to use. We combine creativity 
                with technical expertise to deliver solutions that truly resonate with users.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
            <Card className="gradient-primary text-white border-0 shadow-glow hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">6+</div>
                <div className="text-white/80">Published Apps</div>
              </CardContent>
            </Card>
            
            <Card className="gradient-secondary text-white border-0 shadow-glow hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-white/80">Happy Users</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-accent to-primary text-white border-0 shadow-glow hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">4.7</div>
                <div className="text-white/80">Avg Rating</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary to-accent text-white border-0 shadow-glow hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/80">Dedication</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Core Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="group border-0 shadow-elegant hover:shadow-xl transition-all duration-500 animate-fade-in bg-gradient-to-br from-card to-card/80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;