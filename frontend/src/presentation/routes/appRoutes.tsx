import { createRootRoute, createRoute } from "@tanstack/react-router";
import App from "../components/App/App";
import AboutMePage from "../components/App/AboutMePage/AboutMePage";
import SkillsetPage from "../components/App/SkillsetPage/SkillsetPage";
import PortfolioPage from "../components/App/PortfolioPage/PortfolioPage";

const rootRoute = createRootRoute({
    component: () => <App />,
});

const aboutMeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: AboutMePage,
})

const skillsetRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/skillset",
    component: SkillsetPage,
})

const porfolioRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/portfolio",
    component: PortfolioPage,
})

export const routeTree = rootRoute.addChildren([
    aboutMeRoute,
    skillsetRoute,
    porfolioRoute
]);
