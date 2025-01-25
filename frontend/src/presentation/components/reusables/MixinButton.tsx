import { act, PropsWithChildren } from "react";

interface IMixinButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    options: {
        size: "mixin-Sbutton-sm" | "mixin-Sbutton-base";
        theme?: "theme-Sbutton-generic-white" | "theme-Sbutton-generic-yellow" | "theme-Sbutton-generic-green" | "theme-Sbutton-generic-red" | "theme-Sbutton-generic-black";
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
    const activeClass = active ? `active` : "";

    return (
        <button className={["mixin-Sbutton-like", options.size, options.theme, className, staticMixinClass, staticThemeClass, hasShadowClass, activeClass].join(" ")} {...HTMLattrs}>
            {children}
        </button>
    );
}
