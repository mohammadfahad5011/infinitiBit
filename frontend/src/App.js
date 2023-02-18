
import Achivement from "./Components/Achivement/Achivement";

import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import HeroComponent from "./Components/hero/Hero";
import Stayupdate from "./Components/StayUpdate/Stayupdate";
import Team from "./Components/team/Team";
import Timeline from "./Components/Timeline/Timeline";
import Twitter from "./Components/Twitter/Twitter";
import Video from "./Components/Video/Video";


function App() {
  return (
    <div className="App">
      <main>
        <HeroComponent />
        <Features />
        <Video />
        <Timeline />
        <Achivement />
        <Team />
        <Stayupdate />
        <Twitter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
