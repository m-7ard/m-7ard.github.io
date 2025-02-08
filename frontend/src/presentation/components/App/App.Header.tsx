import AbstractTooltip, { AbstractTooltipDefaultPanel, AbstractTooltipTrigger } from "../other/Tooltip/Abstract/AbstractTooltip";
import MixinButton from "../reusables/MixinButton";
import MixinContentGrid from "../reusables/MixinContentGrid";
import useRouterLocationEq from "../../hooks/useRouterLocationEq";
import useRouterNavigate from "../../hooks/useRouterNavigate";
import MixinPanel, { MixinPanelSection } from "../reusables/MixinPanel";

function AppHeader() {
    const locationEq = useRouterLocationEq();
    const navigate = useRouterNavigate();

    return (
        <MixinContentGrid className="bg-white shrink-0 token-nav-section flex flex-row justify-between items-center p-6 gap-3">
            <MixinButton
                options={{
                    size: "mixin-Sbutton-base",
                    theme: "theme-Sbutton-generic-black",
                }}
                hasShadow
                onClick={() => navigate((routes) => routes.ABOUT_ME)}
            >
                <div>m-7ard.github.io</div>
            </MixinButton>
            <div className="min-[520px]:flex flex-row gap-3 hidden">
                <MixinButton
                    options={{
                        size: "mixin-Sbutton-base",
                        theme: "theme-Sbutton-generic-white",
                    }}
                    hasShadow
                    onClick={() => navigate((routes) => routes.ABOUT_ME)}
                    active={locationEq((routes) => routes.ABOUT_ME)}
                >
                    About Me
                </MixinButton>
                <MixinButton
                    options={{
                        size: "mixin-Sbutton-base",
                        theme: "theme-Sbutton-generic-white",
                    }}
                    hasShadow
                    onClick={() => navigate((routes) => routes.SKILLSET)}
                    active={locationEq((routes) => routes.SKILLSET)}
                >
                    Skillset
                </MixinButton>
                <MixinButton
                    options={{
                        size: "mixin-Sbutton-base",
                        theme: "theme-Sbutton-generic-white",
                    }}
                    hasShadow
                    onClick={() => navigate((routes) => routes.PORTFOLIO)}
                    active={locationEq((routes) => routes.PORTFOLIO)}
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
                    Panel={({ onClose }) => (
                        <AbstractTooltipDefaultPanel
                            render={(props) => (
                                <MixinPanel
                                    options={{
                                        size: "mixin-panel-base",
                                        theme: "theme-panel-generic-white",
                                    }}
                                    hasBorder
                                    hasShadow
                                    className="w-[100vw] z-10 fixed mt-1"
                                >
                                    {(mixinPanelProps) => (
                                        <div ref={props.ref} {...mixinPanelProps}>
                                            <MixinPanelSection className="flex flex-col gap-1">
                                                <MixinButton
                                                    options={{
                                                        size: "mixin-Sbutton-base",
                                                        theme: "theme-Sbutton-generic-white",
                                                    }}
                                                    className="justify-center"
                                                    hasShadow
                                                    onClick={() => {
                                                        navigate((routes) => routes.ABOUT_ME);
                                                        onClose();
                                                    }}
                                                    active={locationEq((routes) => routes.ABOUT_ME)}
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
                                                        navigate((routes) => routes.SKILLSET);
                                                        onClose();
                                                    }}
                                                    active={locationEq((routes) => routes.SKILLSET)}
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
                                                        navigate((routes) => routes.PORTFOLIO);
                                                        onClose();
                                                    }}
                                                    active={locationEq((routes) => routes.PORTFOLIO)}
                                                >
                                                    Portfolio
                                                </MixinButton>
                                            </MixinPanelSection>
                                        </div>
                                    )}
                                </MixinPanel>
                            )}
                        />
                    )}
                    positioning={{
                        top: "100%",
                        right: "0px",
                    }}
                />
            </div>
        </MixinContentGrid>
    );
}

export default AppHeader;
