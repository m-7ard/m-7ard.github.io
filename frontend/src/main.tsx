import { createRoot } from "react-dom/client";
import "./css/styles.scss";
import { RouterProvider } from "@tanstack/react-router";
import router from "./presentation/deps/router.ts";

createRoot(document.getElementById("root")!).render(
    <div className="flex flex-col max-h-full overflow-hidden h-full">
        <RouterProvider router={router} />
    </div>,
);
