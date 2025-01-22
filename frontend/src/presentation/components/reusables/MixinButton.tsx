import { PropsWithChildren } from "react";

interface IMixinButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    options: {
        size: "mixin-Sbutton-sm" | "mixin-Sbutton-base";
        theme?: "theme-Sbutton-generic-white" | "theme-Sbutton-generic-yellow" | "theme-Sbutton-generic-green" | "theme-Sbutton-generic-red";
    };
    isStatic?: boolean;
    active?: boolean;
    hasShadow?: boolean;
}

export default function MixinButton(props: PropsWithChildren<IMixinButtonProps>) {
    const { options, active = false, className, isStatic = false, hasShadow = false, children, ...HTMLattrs } = props;

    const staticMixinClass = isStatic ? "mixin-Sbutton-like--static" : "";
    const staticThemeClass = isStatic ? `${options.theme}--static` : "";
    const hasShadowClass = hasShadow ? `shadow` : "";

    return (
        <button data-active={active} className={["mixin-Sbutton-like", options.size, options.theme, className, staticMixinClass, staticThemeClass, hasShadowClass].join(" ")} {...HTMLattrs}>
            {children}
        </button>
    );
}
