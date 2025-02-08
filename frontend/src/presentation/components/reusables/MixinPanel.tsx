import { ElementType, PropsWithChildren, PropsWithRef } from "react";
import PolymorphicProps from "../../types/PolymorphicProps";

type THostElementProps = React.JSX.IntrinsicAttributes & { className: string };

type MixinPanelProps = PropsWithRef<{
    options: {
        size: "mixin-panel-base";
        theme: "theme-panel-generic-white";
    };
    hasShadow?: boolean;
    hasBorder?: boolean;
    children: (props: THostElementProps) => React.ReactElement;
    className?: string;
}>;

export default function MixinPanel(props: MixinPanelProps) {
    const { options, className = "", hasShadow = false, hasBorder = false, children } = props;

    const shadowClass = hasShadow ? "token-default-shadow" : "";
    const borderClass = hasBorder ? "border token-default-border-color" : "";

    const hostElementProps: THostElementProps = {
        className: ["mixin-panel-like", options.size, options.theme, shadowClass, borderClass, className].join(" "),
    };

    return children(hostElementProps);
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
