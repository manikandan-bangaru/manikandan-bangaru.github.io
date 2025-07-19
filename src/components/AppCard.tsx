import { ExternalLink, Download, Star, Play, Apple, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface AppCardProps {
  title: string;
  description: string;
  image: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  galaxyStoreUrl?: string;
  rating: number;
  downloads: string;
  delay?: number;
}

const AppCard = ({ 
  title, 
  description, 
  image, 
  playStoreUrl, 
  appStoreUrl, 
  galaxyStoreUrl, 
  rating, 
  downloads, 
  delay = 0 
}: AppCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-xl transition-all duration-500 animate-fade-in bg-gradient-to-br from-card to-card/50" style={{ animationDelay: `${delay}s` }}>
      <CardContent className="p-0">
        {/* App Icon */}
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Floating Stats */}
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        <div className="p-6">
          {/* Title & Description */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Download className="w-4 h-4" />
              <span>{downloads}</span>
            </div>
            <div className="flex items-center space-x-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-foreground font-medium">{rating}</span>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="space-y-2">
            {playStoreUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                asChild
              >
                <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5 mr-2 text-green-500" />
                  Google Play Store
                  <ExternalLink className="w-4 h-4 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            )}
            
            {appStoreUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start hover:bg-secondary hover:text-white transition-all duration-300 group/btn"
                asChild
              >
                <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                  <Apple className="w-5 h-5 mr-2 text-blue-500" />
                  App Store
                  <ExternalLink className="w-4 h-4 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            )}
            
            {galaxyStoreUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-start hover:bg-accent hover:text-white transition-all duration-300 group/btn"
                asChild
              >
                <a href={galaxyStoreUrl} target="_blank" rel="noopener noreferrer">
                  <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
                  Galaxy Store
                  <ExternalLink className="w-4 h-4 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppCard;