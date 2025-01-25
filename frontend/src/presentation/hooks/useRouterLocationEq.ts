import { useLocation } from "@tanstack/react-router";
import { useCallback } from "react";
import ROUTE_DATA from "../routes/ROUTE_DATA";

type TRoutes = typeof ROUTE_DATA;

function useRouterLocationEq() {
    const location = useLocation();

    const navigateFn = useCallback(
        (fn: (routes: TRoutes) => TRoutes[keyof TRoutes]) => {
            return location.pathname === fn(ROUTE_DATA);
        },
        [location],
    );

    return navigateFn;
}

export default useRouterLocationEq;
