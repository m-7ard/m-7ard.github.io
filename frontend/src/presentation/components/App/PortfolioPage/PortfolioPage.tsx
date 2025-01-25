import GlobalDialog from "../../other/Dialog/GlobalDialog";
import { useGlobalDialogPanelContext } from "../../other/Dialog/GlobalDialog.Panel.Context";
import CodeHighlighter from "../../reusables/CodeHighlighter";
import Divider from "../../reusables/Divider";
import MixinButton from "../../reusables/MixinButton";
import MixinCard, { MixinCardSection } from "../../reusables/MixinCard";
import MixinPanel, { MixinPanelSection } from "../../reusables/MixinPanel";

function Tech(props: { title: string }) {
    return (
        <MixinButton
            options={{
                size: "mixin-Sbutton-sm",
                theme: "theme-Sbutton-generic-white",
            }}
            className="grow justify-center"
        >
            {props.title}
        </MixinButton>
    );
}

function TechGroup(props: { title: string; sections: Array<{ title: string; buttons: string[] }> }) {
    const { title, sections } = props;

    return (
        <MixinCard
            options={{
                size: "mixin-Scard-base",
                theme: "theme-Scard-generic-white",
            }}
            hasShadow
            hasDivide
            hasBorder
        >
            <MixinCardSection className="bg-neutral-800 text-white">
                <div className="text-lg">{title}</div>
            </MixinCardSection>
            {sections.map(({ title, buttons }) => (
                <MixinCardSection key={title} className="flex flex-col gap-1">
                    <div className="text-base font-bold">
                        {title}
                    </div>
                    <div className="flex flex-row grow gap-1 flex-wrap">
                        {buttons.map((text) => (
                            <Tech title={text} key={text} />
                        ))}
                    </div>
                </MixinCardSection>
            ))}
        </MixinCard>
    );
}

function CodeExamplePanel(props: { title: string; code: string }) {
    const { onClose } = useGlobalDialogPanelContext();

    return (
        <MixinPanel
            options={{
                size: "mixin-panel-base",
                theme: "theme-panel-generic-white",
            }}
            hasBorder
            hasShadow
            className="flex flex-col"
        >
            <MixinPanelSection className="flex flex-row justify-between items-center shrink-0">
                <div className="token-base-title">{props.title}</div>
                <MixinButton
                    options={{
                        size: "mixin-Sbutton-sm",
                        theme: "theme-Sbutton-generic-white",
                    }}
                    onClick={onClose}
                    type="button"
                    hasShadow
                >
                    Close
                </MixinButton>
            </MixinPanelSection>
            <Divider />
            <MixinPanelSection className="flex flex-col overflow-auto">
                <CodeHighlighter code={props.code} />
            </MixinPanelSection>
        </MixinPanel>
    );
}

function CodeExampleDialog(props: { title: string; code: string }) {
    return (
        <GlobalDialog
            zIndex={10}
            Trigger={({ onToggle }) => (
                <MixinButton options={{ size: "mixin-Sbutton-sm", theme: "theme-Sbutton-generic-white" }} onClick={onToggle}>
                    {props.title}
                </MixinButton>
            )}
            Panel={CodeExamplePanel}
            panelProps={props}
        />
    );
}

function PortfolioPage() {
    const techStackSections = [
        {
            title: "Frontend",
            buttons: ["React", "Tanstack Router", "React Query", "Tailwind"],
        },
        {
            title: "Backend",
            buttons: [".Net Core Web API", "MSSQL & SQLite", "EF Core", "xUnit"],
        },
        {
            title: "DevOps & Deployment",
            buttons: ["Controller / Presenter Pattern", "Shared API models"],
        },
    ];

    const technicalDetailsSections = [
        {
            title: "Frontend",
            buttons: ["Controller / Presenter Pattern", "Shared API models"],
        },
        {
            title: "Backend",
            buttons: ["Layered Architecture", "Domain Driven Design", "Value Objects", "Resusable Application Validation"],
        },
    ];

    return (
        <div className="flex flex-col grow">
            <div className="flex flex-col gap-6 p-6">
                <section>
                    <div className="text-2xl font-bold">Order Display System</div>
                </section>
                <TechGroup title="Tech Stack" sections={techStackSections} />
                <TechGroup title="Technical Details" sections={technicalDetailsSections} />
            </div>
            <div className="flex flex-col gap-6 p-6">
                <section>
                    <div className="text-2xl font-bold ">Soccer Team, Player & Match Manager</div>
                </section>
                <TechGroup title="Tech Stack" sections={techStackSections} />
                <TechGroup title="Technical Details" sections={technicalDetailsSections} />
            </div>
        </div>
    );
}

export default PortfolioPage;
