
import IntroSection from "../../components/IntroSection";
import InfoSection from "../../components/InfoSection";
import SciencesSection from "../../components/SciencesSection";

function Home() {
    return (
          <>
            <div className=" intro  ">
                <IntroSection/>
            </div>
            <InfoSection/>
            <SciencesSection/>
          </>
    );
}

export default Home;