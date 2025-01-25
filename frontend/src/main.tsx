import { createRoot } from "react-dom/client";
import "./css/styles.scss";
import App from "./presentation/components/App/App.tsx";

createRoot(document.getElementById("root")!).render(
    <div className="flex flex-col max-h-full overflow-hidden h-full">
        <App />
    </div>,
);
