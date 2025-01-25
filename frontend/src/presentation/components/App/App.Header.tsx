import AbstractTooltip, { AbstractTooltipDefaultPanel, AbstractTooltipTrigger } from "../other/Tooltip/Abstract/AbstractTooltip";
import { useAbstractTooltipContext } from "../other/Tooltip/Abstract/AbstractTooltip.Context";
import MixinButton from "../reusables/MixinButton";
import MixinContentGrid from "../reusables/MixinContentGrid";
import MixinPanel, { MixinPanelSection } from "../reusables/MixinPanel";
import { useAppRoutingContext } from "./App.Routing.Context";

function AppHeader() {
    const { route, navigate } = useAppRoutingContext();

    return (
        <MixinContentGrid className="bg-white shrink-0 token-nav-section flex flex-row justify-between items-center p-6 gap-3">
            <MixinButton
                options={{
                    size: "mixin-Sbutton-base",
                    theme: "theme-Sbutton-generic-black",
                }}
                hasShadow
                onClick={() => navigate("ABOUT_ME")}
            >
                m-7ard.github.io
            </MixinButton>
            <div className="min-[520px]:flex flex-row gap-3 hidden">
                <MixinButton
                    options={{
                        size: "mixin-Sbutton-base",
                        theme: "theme-Sbutton-generic-white",
                    }}
                    hasShadow
                    onClick={() => navigate("ABOUT_ME")}
                    active={route === "ABOUT_ME"}
                >
                    About Me
                </MixinButton>
                <MixinButton
                    options={{
                        size: "mixin-Sbutton-base",
                        theme: "theme-Sbutton-generic-white",
                    }}
                    hasShadow
                    onClick={() => navigate("SKILLSET")}
                    active={route === "SKILLSET"}
                >
                    Skillset
                </MixinButton>
                <MixinButton
                    options={{
                        size: "mixin-Sbutton-base",
                        theme: "theme-Sbutton-generic-white",
                    }}
                    hasShadow
                    onClick={() => navigate("PORTFOLIO")}
                    active={route === "PORTFOLIO"}
                >
                    Portfolio
                </MixinButton>
            </div>
            <div className="max-[520px]:flex flex-row gap-3 hidden">
                <AbstractTooltip
                    Trigger={({ onToggle }) => (
                        <AbstractTooltipTrigger>
                            <MixinButton
                                options={{
                                    size: "mixin-Sbutton-base",
                                    theme: "theme-Sbutton-generic-white",
                                }}
                                hasShadow
                                onClick={onToggle}
                            >
                                ☰
                            </MixinButton>
                        </AbstractTooltipTrigger>
                    )}
                    Panel={<Menu />}
                    positioning={{
                        top: "100%",
                        right: "0px",
                    }}
                />
            </div>
        </MixinContentGrid>
    );
}

function Menu() {
    const { onClose } = useAbstractTooltipContext();
    const { route, navigate } = useAppRoutingContext();

    return (
        <AbstractTooltipDefaultPanel className={`z-10 fixed mt-1`}>
            <MixinPanel
                options={{
                    size: "mixin-panel-base",
                    theme: "theme-panel-generic-white",
                }}
                hasBorder
                hasShadow
                className=" w-[100vw]"
            >
                <MixinPanelSection className="flex flex-col gap-1">
                    <MixinButton
                        options={{
                            size: "mixin-Sbutton-base",
                            theme: "theme-Sbutton-generic-white",
                        }}
                        className="justify-center"
                        hasShadow
                        onClick={() => {
                            navigate("ABOUT_ME");
                            onClose();
                        }}
                        active={route === "ABOUT_ME"}
                    >
                        About Me
                    </MixinButton>
                    <MixinButton
                        options={{
                            size: "mixin-Sbutton-base",
                            theme: "theme-Sbutton-generic-white",
                        }}
                        className="justify-center"
                        hasShadow
                        onClick={() => {
                            navigate("SKILLSET");
                            onClose();
                        }}
                        active={route === "SKILLSET"}
                    >
                        Skillset
                    </MixinButton>
                    <MixinButton
                        options={{
                            size: "mixin-Sbutton-base",
                            theme: "theme-Sbutton-generic-white",
                        }}
                        className="justify-center"
                        hasShadow
                        onClick={() => {
                            navigate("PORTFOLIO");
                            onClose();
                        }}
                        active={route === "PORTFOLIO"}
                    >
                        Portfolio
                    </MixinButton>
                </MixinPanelSection>
            </MixinPanel>
        </AbstractTooltipDefaultPanel>
    );
}

export default AppHeader;
