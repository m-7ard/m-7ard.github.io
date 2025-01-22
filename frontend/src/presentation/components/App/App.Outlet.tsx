import AboutMePage from "./AboutMePage/AboutMePage";
import { useAppRoutingContext } from "./App.Routing.Context";
import PortfolioPage from "./PortfolioPage/PortfolioPage";
import SkillsetPage from "./SkillsetPage/SkillsetPage";

function AppOutlet() {
    const { route } = useAppRoutingContext();

    if (route === "ABOUT_ME") {
        return <AboutMePage />;
    }

    if (route === "SKILLSET") {
        return <SkillsetPage />;
    }

    if (route === "PORTFOLIO") {
        return <PortfolioPage />
    }
}

export default AppOutlet;
