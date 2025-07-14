import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/Skills";


export const Home = () => {
    return( 
    <div className="min-h-screen bg-background text-foreground overflow-hidden">

       {/*theme toggler*/}
        <ThemeToggle />
       {/*backround eff*/}
        <StarBackground />
         {/*navbar*/}
         <Navbar />

       {/*main content*/}
       <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
       </main>

     {/*footer*/}

    </div>

    );
};