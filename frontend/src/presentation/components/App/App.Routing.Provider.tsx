import { PropsWithChildren, useCallback, useState } from "react";
import { Routes } from "./App.Routing.Types";
import { AppRoutingContext } from "./App.Routing.Context";

function AppRoutingProvider(props: PropsWithChildren) {
    const [route, setRoute] = useState<Routes>("ABOUT_ME");
    const navigate = useCallback((route: Routes) => setRoute(route), []);

    return <AppRoutingContext.Provider value={{ route: route, navigate: navigate }}>{props.children}</AppRoutingContext.Provider>;
}

export default AppRoutingProvider;