import { useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";
import ROUTE_DATA from "../routes/ROUTE_DATA";

type TRoutes = typeof ROUTE_DATA;

function useRouterNavigate() {
    const navigate = useNavigate();

    const navigateFn = useCallback(
        (fn: (routes: TRoutes) => TRoutes[keyof TRoutes]) => {
            return navigate({ to: fn(ROUTE_DATA), mask: { to: "/" } });
        },
        [navigate],
    );

    return navigateFn;
}

export default useRouterNavigate;
