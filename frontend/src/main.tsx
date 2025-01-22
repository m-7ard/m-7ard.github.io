import { createRoot } from "react-dom/client";
import "./css/styles.scss";
import App from "./presentation/components/App/App.tsx";
import GlobalDialogManager from "./presentation/components/other/Dialog/GlobalDialog.Manager.tsx";

createRoot(document.getElementById("root")!).render(
    <GlobalDialogManager href={""}>
        <div className="flex flex-col max-h-full">
            <App />
        </div>
    </GlobalDialogManager>,
);
