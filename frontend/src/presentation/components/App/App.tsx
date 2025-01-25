import GlobalDialogManager from "../other/Dialog/GlobalDialog.Manager";
import CoverImage from "../reusables/CoverImage";
import Divider from "../reusables/Divider";
import MixinButton from "../reusables/MixinButton";
import AppHeader from "./App.Header";
import AppOutlet from "./App.Outlet";
import AppRoutingProvider from "./App.Routing.Provider";

function MobileSidebar() {
    return (
        <div className="token-default-flex-col px-3 py-6 border-r flex flex-col gap-6">
            <CoverImage
                className="min-w-8 aspect-square rounded-lg overflow-hidden hover:bg-yellow-200 mixin-Sbutton-like"
                src="https://static-00.iconduck.com/assets.00/circle-information-icon-256x256-iur97f49.png"
            />
            <CoverImage className="min-w-8 aspect-square rounded-lg overflow-hidden" src="https://avatars.githubusercontent.com/u/103217142?v=4" />
            <CoverImage className="min-w-8 aspect-square rounded-lg overflow-hidden" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            <CoverImage className="min-w-8 aspect-square rounded-lg overflow-hidden" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
        </div>
    );
}

function FullSidebar() {
    return (
        <div className="p-6 border-r flex flex-col gap-6 w-[250px]">
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
                <MixinButton
                    options={{
                        size: "mixin-Sbutton-base",
                        theme: "theme-Sbutton-generic-black",
                    }}
                    hasShadow
                    className="justify-center"
                >
                    Github
                </MixinButton>
                <MixinButton
                    options={{
                        size: "mixin-Sbutton-base",
                        theme: "theme-Sbutton-generic-black",
                    }}
                    hasShadow
                    className="justify-center"
                >
                    LinkedIn
                </MixinButton>
            </div>
        </div>
    );
}

function App() {
    return (
        <AppRoutingProvider>
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
                        <AppOutlet />
                    </section>
                </main>
            </GlobalDialogManager>
        </AppRoutingProvider>
    );
}

export default App;
