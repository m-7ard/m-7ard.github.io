import { Outlet } from "@tanstack/react-router";
import GlobalDialogManager from "../other/Dialog/GlobalDialog.Manager";
import CoverImage from "../reusables/CoverImage";
import Divider from "../reusables/Divider";
import MixinButton from "../reusables/MixinButton";
import AppHeader from "./App.Header";
import GlobalDialog from "../other/Dialog/GlobalDialog";

function FullSidebarAsPanel() {
    return (
        <div className="fixed top-0 left-0 bottom-0">
            <div className="bg-white h-full">
                <FullSidebar />
            </div>
        </div>
    );
}

function MobileSidebar() {
    return (
        <div className="token-default-flex-col px-3 py-6 border-r flex flex-col gap-6">
            <GlobalDialog
                Trigger={({ onToggle }) => (
                    <div onClick={onToggle}>
                        <CoverImage
                            className="min-w-8 aspect-square rounded-lg overflow-hidden hover:bg-yellow-200 mixin-Sbutton-like"
                            src="https://static-00.iconduck.com/assets.00/circle-information-icon-256x256-iur97f49.png"
                        />
                    </div>
                )}
                Panel={FullSidebarAsPanel}
                panelProps={{}}
                zIndex={20}
            />
            <CoverImage className="min-w-8 aspect-square rounded-lg overflow-hidden" src="https://avatars.githubusercontent.com/u/103217142?v=4" />
            <a href="https://github.com/m-7ard" className="min-w-8 aspect-square rounded-lg overflow-hidden">
                <CoverImage className="w-full h-full" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            </a>
            <a href="https://www.linkedin.com/in/maxim-s-90164b155/" className="min-w-8 aspect-square rounded-lg overflow-hidden">
                <CoverImage className="w-full h-full" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
            </a>
        </div>
    );
}

function FullSidebar() {
    return (
        <div className="p-6 border-r flex flex-col gap-6 w-[250px] bg-white h-full">
            <div className="p-3 bg-gray-200 rounded">
                <CoverImage
                    className="min-w-8 w-[140px] aspect-square rounded-lg overflow-hidden hover:bg-yellow-200 mixin-Sbutton-like mx-auto"
                    src="https://avatars.githubusercontent.com/u/103217142?v=4"
                />
            </div>
            <div>
                <div className="text-2xl font-bold">Maxim Sevenard</div>
                <div className="text-lg">Fullstack Developer</div>
            </div>
            <div className="flex flex-col gap-1">
                <a href="https://github.com/m-7ard">
                    <MixinButton
                        options={{
                            size: "mixin-Sbutton-base",
                            theme: "theme-Sbutton-generic-black",
                        }}
                        hasShadow
                        className="justify-center w-full"
                    >
                        Github
                    </MixinButton>
                </a>
                <a href="https://www.linkedin.com/in/maxim-s-90164b155/">
                    <MixinButton
                        options={{
                            size: "mixin-Sbutton-base",
                            theme: "theme-Sbutton-generic-black",
                        }}
                        hasShadow
                        className="justify-center w-full"
                    >
                        LinkedIn
                    </MixinButton>
                </a>
            </div>
        </div>
    );
}

function App() {
    return (
        <GlobalDialogManager href={""}>
            <AppHeader />
            <Divider />
            <main className="max-h-full overflow-hidden flex flex-row grow">
                <section className="max-[640px]:block hidden">
                    <MobileSidebar />
                </section>
                <section className=" max-[640px]:hidden">
                    <FullSidebar />
                </section>
                <section className="overflow-auto flex flex-col max-h-full grow basis-2/3 bg-zinc-50">
                    <Outlet />
                </section>
            </main>
        </GlobalDialogManager>
    );
}

export default App;
