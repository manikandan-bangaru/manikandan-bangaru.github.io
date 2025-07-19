import AppCard from './AppCard';
import app2048 from '@/assets/app-2048.jpg';
import appBrain from '@/assets/app-brain.jpg';
import appSliding from '@/assets/app-sliding.jpg';
import appSudoku from '@/assets/app-sudoku.jpg';
import appBomb from '@/assets/app-bomb.jpg';
import appStudent from '@/assets/app-student.jpg';

const AppsSection = () => {
  const apps = [
    {
      title: "Classic 2048 Puzzle Game",
      description: "Enjoy the classic 2048 puzzle game with a clean and simple design. Challenge your mind and reach the highest tile in this addictive number merging game.",
      image: app2048,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.magiban.org.classic_2048",
      appStoreUrl: "https://www.apple.com/app-store/",
      galaxyStoreUrl: "https://apps.samsung.com/appquery/appDetail.as?appId=com.magiban.org.classic_2048",
      rating: 4.7,
      downloads: "10K+"
    },
    {
      title: "Brain Puzzle Quest",
      description: "Enhance your problem-solving skills with the Brain Puzzle App. Sharpen your mind through various puzzles and cognitive challenges designed to boost your mental agility.",
      image: appBrain,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.magiban.org.brain_puzzle_quest",
      appStoreUrl: "https://www.apple.com/app-store/",
      galaxyStoreUrl: "https://apps.samsung.com/appquery/appDetail.as?appId=com.magiban.org.brain_puzzle_quest",
      rating: 4.6,
      downloads: "8K+"
    },
    {
      title: "Sliding Puzzle Adventure",
      description: "Challenge yourself with the Sliding Puzzle App. Slide and solve to unlock new challenges in this engaging tile-based puzzle game with beautiful themes.",
      image: appSliding,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.magiban.org.sliding_puzzle",
      appStoreUrl: "https://www.apple.com/app-store/",
      galaxyStoreUrl: "https://apps.samsung.com/appquery/appDetail.as?appId=com.magiban.org.sliding_puzzle",
      rating: 4.5,
      downloads: "6K+"
    },
    {
      title: "Sudoku Master Pro",
      description: "Challenge yourself with the Sudoku Puzzle App. Test your logic and number skills with thousands of puzzles across multiple difficulty levels.",
      image: appSudoku,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.magiban.org.sudoku_master",
      appStoreUrl: "https://www.apple.com/app-store/",
      galaxyStoreUrl: "https://apps.samsung.com/appquery/appDetail.as?appId=com.magiban.org.sudoku_master",
      rating: 4.8,
      downloads: "12K+"
    },
    {
      title: "Bomb Hunt Puzzle Game",
      description: "Bombs are hidden in grass field. Find the bomb and flag them without blasting! A thrilling minesweeper-style game with modern graphics and smooth gameplay.",
      image: appBomb,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.magiban.org.bomb_hunt",
      appStoreUrl: "https://www.apple.com/app-store/",
      galaxyStoreUrl: "https://apps.samsung.com/appquery/appDetail.as?appId=com.magiban.org.bomb_hunt",
      rating: 4.4,
      downloads: "5K+"
    },
    {
      title: "My Student App",
      description: "Manage your school activities, grades, attendance, and more with the My Student App. The perfect companion for modern students to stay organized and excel academically.",
      image: appStudent,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.magiban.org.student_app",
      appStoreUrl: "https://www.apple.com/app-store/",
      galaxyStoreUrl: "https://apps.samsung.com/appquery/appDetail.as?appId=com.magiban.org.student_app",
      rating: 4.9,
      downloads: "15K+"
    }
  ];

  return (
    <section id="apps" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Mobile Applications
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Apps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our collection of innovative mobile applications designed to entertain, 
            educate, and enhance your digital experience across gaming, productivity, and education.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <AppCard
              key={app.title}
              title={app.title}
              description={app.description}
              image={app.image}
              playStoreUrl={app.playStoreUrl}
              appStoreUrl={app.appStoreUrl}
              galaxyStoreUrl={app.galaxyStoreUrl}
              rating={app.rating}
              downloads={app.downloads}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsSection;