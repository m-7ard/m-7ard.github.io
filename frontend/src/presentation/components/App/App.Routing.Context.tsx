import createSafeContext from "../../utils/createSafeContext";
import { Routes } from "./App.Routing.Types";

export const [AppRoutingContext, useAppRoutingContext] = createSafeContext<{ route: Routes; navigate: (route: Routes) => void }>(
    "useAppRoutingContext must be used within AppRoutingContext.Provider",
);
