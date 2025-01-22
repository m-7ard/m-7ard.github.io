import orderDomain from "../../../code-examples/OrderDomain";
import GlobalDialog from "../../other/Dialog/GlobalDialog";
import { useGlobalDialogPanelContext } from "../../other/Dialog/GlobalDialog.Panel.Context";
import CodeHighlighter from "../../reusables/CodeHighlighter";
import Divider from "../../reusables/Divider";
import MixinButton from "../../reusables/MixinButton";
import MixinPanel, { MixinPanelSection } from "../../reusables/MixinPanel";

function Tech(props: { title: string }) {
    return (
        <MixinButton
            options={{
                size: "mixin-Sbutton-sm",
                theme: "theme-Sbutton-generic-yellow",
            }}
            className="grow justify-center"
        >
            {props.title}
        </MixinButton>
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
    return (
        <div className="overflow-hidden">
            <section className="p-3 token-default-flex-col">
                <div>
                    <div className="token-default-title">Order Display System</div>
                    <a className="token-base-text text-blue-600 hover:underline" href="https://github.com/m-7ard/Dotnet-React-Order-Display-System-">
                        https://github.com/m-7ard/Dotnet-React-Order-Display-System-
                    </a>
                </div>
                <Divider />
                <div className="p-3 border token-default-border-color token-default-flex-col">
                    <div className="token-base-text font-bold">Features</div>
                    <Divider />
                    <ul>
                        <li className="token-base-text">&bull; Product Management</li>
                        <li className="token-base-text">&bull; Automatic Creation of Product Histories / Archives</li>
                        <li className="token-base-text">&bull; Order Management</li>
                        <li className="token-base-text">&bull; Product Image Upload and Management</li>
                        <li className="token-base-text">&bull; Domains & Value Objects to Enforce Business Rules</li>
                        <li className="token-base-text">&bull; Injectable Validators to Reuse Application Logic</li>
                        <li className="token-base-text">&bull; Backend Integration Tests</li>
                        <li className="token-base-text">&bull; Backend Application Layer Unit Tests</li>
                        <li className="token-base-text">&bull; Frontend Validation</li>
                        <li className="token-base-text">&bull; Frontend Request Error Handling</li>
                    </ul>
                </div>
                <div className="p-3 border token-default-border-color token-default-flex-col">
                    <div className="token-base-text font-bold">Tech Stack</div>
                    <Divider />
                    <div>
                        <div className="token-base-text font-bold">Frontend</div>
                        <div className="flex flex-row gap-1 flex-wrap">
                            <Tech title="React" />
                            <Tech title="Tanstack Router" />
                            <Tech title="React Query" />
                            <Tech title="Tailwind" />
                        </div>
                    </div>
                    <div>
                        <div className="token-base-text font-bold">Backend</div>
                        <div className="flex flex-row gap-1 flex-wrap">
                            <Tech title=".Net Core Web API" />
                            <Tech title="MSSQL & SQLite" />
                            <Tech title="EF Core" />
                            <Tech title="xUnit" />
                        </div>
                    </div>
                    <div>
                        <div className="token-base-text font-bold">DevOps & Deployment</div>
                        <div className="flex flex-row gap-1 flex-wrap">
                            <Tech title="Docker" />
                            <Tech title="Git" />
                        </div>
                    </div>
                </div>
                <div className="p-3 border token-default-border-color token-default-flex-col">
                    <div className="token-base-text font-bold">Technical Details</div>
                    <Divider />
                    <div>
                        <div className="token-base-text font-bold">Frontend</div>
                        <div className="flex flex-row gap-1 flex-wrap">
                            <Tech title="Controller / Presenter Pattern" />
                            <Tech title="Shared API models" />
                        </div>
                    </div>
                    <div>
                        <div className="token-base-text font-bold">Backend</div>
                        <div className="flex flex-row gap-1 flex-wrap">
                            <Tech title="Layered Architecture" />
                            <Tech title="Domain Driven Design" />
                            <Tech title="Value Objects" />
                            <Tech title="Resusable Application Validation" />
                        </div>
                    </div>
                </div>
                <div className="p-3 border token-default-border-color token-default-flex-col max-w-full">
                    <div className="token-base-text font-bold">Code Examples</div>
                    <Divider />
                    <CodeExampleDialog title={"Order Domain"} code={orderDomain} />
                </div>
            </section>
        </div>
    );
}

export default PortfolioPage;
