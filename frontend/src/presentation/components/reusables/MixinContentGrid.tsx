import { ElementType, PropsWithChildren } from "react";
import PolymorphicProps from "../../types/PolymorphicProps";
import useDirectives from "../../hooks/useDirectives";
import DirectiveFn from "../../types/DirectiveFn";
import contentGridDirective from "../../directives/contentGridDirective";
import contentGridTrackDirective from "../../directives/contentGridTrackDirective";

type MixinPageProps<E extends ElementType> = PolymorphicProps<E> & {
    directives?: Array<DirectiveFn>;
};

export default function MixinContentGrid<T extends ElementType = "div">(props: PropsWithChildren<MixinPageProps<T>>) {
    const { as, children, className, directives = [], ...htmlAttrs } = props;
    const Component = as ?? "div";

    const { classNames, attrs } = useDirectives({ classNames: [className], attrs: { ...htmlAttrs } }, [...directives, contentGridDirective()]);

    return (
        <Component className={classNames.join(" ")} {...attrs}>
            {children}
        </Component>
    );
}

type MixinContentGridTrackProps<E extends ElementType> = PolymorphicProps<E> & {
    track: "sm" | "base" | "lg" | "full";
    directives?: Array<DirectiveFn>;
};

export function MixinContentGridTrack<T extends ElementType = "div">(props: PropsWithChildren<MixinContentGridTrackProps<T>>) {
    const { as, children, track, className, directives = [], ...HTMLattrs } = props;
    const Component = as ?? "div";

    const { classNames, attrs } = useDirectives({ classNames: [className], attrs: { ...HTMLattrs } }, [...directives, contentGridTrackDirective(track)]);

    return (
        <Component className={classNames.join(" ")} {...attrs}>
            {children}
        </Component>
    );
}
