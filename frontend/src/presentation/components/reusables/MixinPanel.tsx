import { ElementType, PropsWithChildren, PropsWithRef } from "react";
import PolymorphicProps from "../../types/PolymorphicProps";

type THostElementProps = React.JSX.IntrinsicAttributes & PropsWithChildren<{ className: string }>;

type MixinPanelProps = PropsWithRef<{
    options: {
        size: "mixin-panel-base";
        theme: "theme-panel-generic-white";
    };
    hasShadow?: boolean;
    hasBorder?: boolean;
    render: (props: THostElementProps) => React.ReactElement;
    className?: string;
}>;

export default function MixinPanel(props: PropsWithChildren<MixinPanelProps>) {
    const { options, render, className = "", hasShadow = false, hasBorder = false, children } = props;

    const shadowClass = hasShadow ? "token-default-shadow" : "";
    const borderClass = hasBorder ? "border token-default-border-color" : "";

    const hostElementProps: THostElementProps = {
        className: ["mixin-panel-like", options.size, options.theme, shadowClass, borderClass, className].join(" "),
        children: children,
    };

    return render(hostElementProps);
}

type MixinPanelSectionProps<E extends ElementType> = PolymorphicProps<E> & {};

export function MixinPanelSection<T extends ElementType = "section">(props: PropsWithChildren<MixinPanelSectionProps<T>>) {
    const { as, className, children, ...HTMLattrs } = props;
    const Component = as ?? "section";

    return (
        <Component className={[className].join(" ")} {...HTMLattrs} data-role="panel-section">
            {children}
        </Component>
    );
}
