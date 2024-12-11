import { HeaderComponent } from "./HeaderComponent";
import { NewRelease } from "./NewRelease";
import { FreeGames } from "./FreeGames";
import { MostPop } from "./MostPop";
import { Footer } from "./Footer";
import StoreCatelog from "./StoreCatelog";
import Categories from "./Categories";
import TrialWeekend from "./TrialWeekend";
import ComingSoon from "./ComingSoon";
import AfterParty from "./AfterParty";
import Rising from "./Rising";
import "./Storepage.css";
import HeroSection from "./HeroSection";

function Storepage() {
  return (
    <>
      <HeroSection />
      <HeaderComponent />
      <NewRelease />
      <FreeGames />
      <TrialWeekend />
      <ComingSoon />
      <AfterParty />
      <Rising />
      <MostPop />
      <Categories />
      <StoreCatelog />
      <Footer />
    </>
  );
}

export default Storepage;
