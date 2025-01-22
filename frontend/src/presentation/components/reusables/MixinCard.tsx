import { ElementType, PropsWithChildren } from "react";
import PolymorphicProps from "../../types/PolymorphicProps";

type MixinCardProps<E extends ElementType> = PolymorphicProps<E> & {
    options: {
        size: "mixin-Scard-base";
        theme: "theme-Scard-generic-white";
    };
    hasShadow?: boolean;
    hasBorder?: boolean;
    hasDivide?: boolean;
};

export default function MixinCard<T extends ElementType = "div">(props: PropsWithChildren<MixinCardProps<T>>) {
    const { options, as, className, hasShadow = false, hasBorder = false, hasDivide = false, ...HTMLattrs } = props;
    const Component = as ?? "div";

    const shadowClass = hasShadow ? "token-default-shadow" : "";
    const borderClass = hasBorder ? "border token-default-border-color" : "";
    const divideClass = hasDivide ? "divide-y token-default-divide-color" : "";

    return (
        <Component className={["mixin-Scard-like", options.size, options.theme, className, shadowClass, borderClass, divideClass].join(" ")} {...HTMLattrs}>
            {props.children}
        </Component>
    );
}

type MixinCardSectionProps<E extends ElementType> = PolymorphicProps<E> & { fillBg?: boolean };

export function MixinCardSection<T extends ElementType = "section">(props: PropsWithChildren<MixinCardSectionProps<T>>) {
    const { as, className, fillBg = false, ...HTMLattrs } = props;
    const Component = as ?? "section";

    const bgClass = fillBg ? "bg-white" : "";

    return (
        <Component className={[className, bgClass].join(" ")} {...HTMLattrs} data-role="section">
            {props.children}
        </Component>
    );
}
