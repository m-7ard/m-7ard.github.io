import Divider from "../../reusables/Divider";
import MixinButton from "../../reusables/MixinButton";

function Tech(props: { title: string }) {
    return (
        <MixinButton
            options={{
                size: "mixin-Sbutton-base",
                theme: "theme-Sbutton-generic-green",
            }}
            hasShadow
            className="grow justify-center"
        >
            {props.title}
        </MixinButton>
    );
}

function TechGroup(props: { title: string; sections: Array<{ title: string; buttons: string[] }> }) {
    const { title, sections } = props;

    return (
        <div className="flex flex-col gap-3">
            <section>
                <div className="text-lg">{title}</div>
            </section>
            <Divider />
            {sections.map(({ title, buttons }) => (
                <section key={title} className="flex flex-col gap-1">
                    <div className="text-base font-bold">{title}</div>
                    <div className="flex flex-row grow gap-1 flex-wrap">
                        {buttons.map((text) => (
                            <Tech title={text} key={text} />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
/*
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
*/
function PortfolioPage() {
    const ODS_TechStackSections = [
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
            buttons: ["Docker", "Git"],
        },
    ];

    const ODS_TechnicalDetailsSections = [
        {
            title: "Frontend",
            buttons: ["Controller / Presenter Pattern", "Global Error Handling", "Shared API Models"],
        },
        {
            title: "Backend",
            buttons: ["Layered Architecture", "Domain Driven Design", "Value Objects", "Resusable Application Validation", "Unit Tests", "Integration Tests"],
        },
    ];

    const Soccer_TechStackSections = [
        {
            title: "Frontend",
            buttons: ["Angular", "RxJs", "Tailwind"],
        },
        {
            title: "Backend",
            buttons: ["Node.js", "MySql", "Jest"],
        },
        {
            title: "DevOps & Deployment",
            buttons: ["Docker", "Git"],
        },
    ];

    const Soccer_TechnicalDetailsSections = [
        {
            title: "Frontend",
            buttons: ["Data Access Layer", "HTTP Interceptors", "Route Guards", "Global Error Handling", "Shared API Models"],
        },
        {
            title: "Backend",
            buttons: ["Layered Architecture", "Domain Driven Design", "Value Objects", "Resusable Application Validation", "Unit Tests", "Integration Tests"],
        },
    ];

    return (
        <div className="flex flex-col grow">
            <div className="flex flex-col p-6 gap-6">
                <section className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">Order Display System</div>
                    <a href="https://github.com/m-7ard/Dotnet-React-Order-Display-System-" className="w-fit">
                        <MixinButton
                            options={{
                                size: "mixin-Sbutton-sm",
                                theme: "theme-Sbutton-generic-black",
                            }}
                            className="w-fit"
                        >
                            <div>#</div>
                            <div>Github</div>
                        </MixinButton>
                    </a>
                </section>
                <Divider />
                <div className="text-base">
                    The <span className="font-bold">Dotnet React Order Display System</span> is a full-stack application designed for managing and displaying orders and products.
                    It combines a .NET Core backend with a React frontend, following modern architectural patterns and emphasizing business rule enforcement, validation, and
                    scalability.
                </div>
                <TechGroup title="Tech Stack" sections={ODS_TechStackSections} />
                <TechGroup title="Technical Details" sections={ODS_TechnicalDetailsSections} />
            </div>
            <div className="flex flex-col gap-6 p-6">
                <section className="flex flex-col gap-2">
                    <div className="text-2xl font-bold ">Soccer Team, Player & Match Manager</div>
                    <a href="https://github.com/m-7ard/Angular-Node-Soccer-Manager" className="w-fit">
                        <MixinButton
                            options={{
                                size: "mixin-Sbutton-sm",
                                theme: "theme-Sbutton-generic-black",
                            }}
                            className="w-fit"
                        >
                            <div>#</div>
                            <div>Github</div>
                        </MixinButton>
                    </a>
                </section>
                <Divider />
                <div className="text-base">
                    The <span className="font-bold">Soccer Team, Player & Match Manager</span> is a full-stack application designed for managing soccer Teams, Players, Matches and
                    Goals. It combines a Node.js backend which features its own depndency injection system together with Actions as endpoints; it uses an Angular frontend, making
                    full use of Angular's features such as interceptors and global error handlers, dynamic components, RxJs integration & more.
                </div>
                <TechGroup title="Tech Stack" sections={Soccer_TechStackSections} />
                <TechGroup title="Technical Details" sections={Soccer_TechnicalDetailsSections} />
            </div>
        </div>
    );
}

export default PortfolioPage;
