import { createRouter } from "@tanstack/react-router";
import { routeTree } from "../routes/appRoutes";

const router = createRouter({
    routeTree,
    defaultGcTime: 0
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

export default router;