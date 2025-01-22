import pageDirective from "../../directives/pageDirective";
import CoverImage from "../reusables/CoverImage";
import Divider from "../reusables/Divider";
import MixinContentGrid, { MixinContentGridTrack } from "../reusables/MixinContentGrid";
import AppHeader from "./App.Header";
import AppOutlet from "./App.Outlet";
import AppRoutingProvider from "./App.Routing.Provider";
import "highlight.js/styles/default.css";

function App() {
    return (
        <AppRoutingProvider>
            <AppHeader />
            <Divider />
            <MixinContentGrid directives={[pageDirective((options) => ({ size: options.SIZE.BASE }))]} className="overflow-hidden flex flex-col">
                
                <MixinContentGridTrack
                    track="base"
                    directives={[]}
                    className="overflow-auto h-full"
                >
                    
                    <section className="token-body-section flex flex-row max-[450px]:flex-col max-[450px]:divide-y divide-x token-default-divide-color grow">
                    <div className="p-3 token-default-flex-col box-border min-[450px]:basis-1/3">
                        <div className="w-full">
                            <CoverImage src="https://avatars.githubusercontent.com/u/103217142?v=4" className="token-default-avatar w-full aspect-square token-default-shadow" />
                        </div>
                        <Divider />
                        <div>
                            <div className="token-default-title font-bold">Maxim Sevenard</div>
                            <div className="token-base-text">Fullstack Developer</div>
                            <div className="token-base-text">Madrid</div>
                        </div>
                        <Divider />
                        <div>
                            <div className="token-base-text font-bold">Github</div>
                            <div className="token-base-text">https://github.com/m-7ard</div>
                        </div>
                        <div>
                            <div className="token-base-text font-bold">LinkedIn</div>
                            <div className="token-base-text break-all">https://www.linkedin.com/in/maxim-s-90164b155/</div>
                        </div>
                    </div>
                    <div className=" min-[450px]:basis-2/3">
                        <AppOutlet />
                    </div>
                    </section>
                    
                </MixinContentGridTrack>
            </MixinContentGrid>
        </AppRoutingProvider>
    );
}

export default App;
