import MixinContentGrid, { MixinContentGridTrack } from "../reusables/MixinContentGrid";
import { useAppRoutingContext } from "./App.Routing.Context";

function AppHeader() {
    const { route, navigate } = useAppRoutingContext();

    return (
        <MixinContentGrid className="bg-white shrink-0 token-nav-section flex flex-row">
            <MixinContentGridTrack track={"base"} className="flex flex-row token-default-divide-color divide-x">
                <div className=" basis-1/3">
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("ABOUT_ME");
                        }}
                        className={`token-nav-section-button justify-center ${route === "ABOUT_ME" ? "active" : ""}`}
                    >
                        About Me
                    </a>
                </div>
                <div className=" basis-1/3">
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("SKILLSET");
                        }}
                        className={`token-nav-section-button justify-center ${route === "SKILLSET" ? "active" : ""}`}
                    >
                        Skillset
                    </a>
                </div>
                <div
                    className=" basis-1/3"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("PORTFOLIO");
                    }}
                >
                    <a className={`token-nav-section-button justify-center ${route === "PORTFOLIO" ? "active" : ""}`}>Portfolio</a>
                </div>
            </MixinContentGridTrack>
        </MixinContentGrid>
    );
}

export default AppHeader;
