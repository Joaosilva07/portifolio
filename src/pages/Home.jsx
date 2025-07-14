import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/navbar";


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
       </main>

     {/*footer*/}

    </div>

    );
};