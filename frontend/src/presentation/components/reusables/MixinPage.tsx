import { ElementType, PropsWithChildren } from "react";
import PolymorphicProps from "../../types/PolymorphicProps";
import useDirectives from "../../hooks/useDirectives";
import DirectiveFn from "../../types/DirectiveFn";
import pageDirective, { PageDirectiveExpression } from "../../directives/pageDirective";
import pageSectionDirective from "../../directives/pageSectionDirective";

type MixinPageProps<E extends ElementType> = PolymorphicProps<E> & {
    options: PageDirectiveExpression;
    directives?: Array<DirectiveFn>;
};

export default function MixinPage<T extends ElementType = "div">(props: PropsWithChildren<MixinPageProps<T>>) {
    const { options, as, className, children, directives = [], ...HTMLattrs } = props;
    const Component = as ?? "div";

    const hostElementProps = useDirectives({ classNames: [className], attrs: { ...HTMLattrs } }, [...directives, pageDirective(options)]);

    return (
        <Component className={hostElementProps.classNames.join(" ")} {...hostElementProps.attrs}>
            {children}
        </Component>
    );
}

type MixinPageSectionProps<E extends ElementType> = PolymorphicProps<E> & {
    directives?: Array<DirectiveFn>;
};

export function MixinPageSection<T extends ElementType = "section">(props: PropsWithChildren<MixinPageSectionProps<T>>) {
    const { as, className, children, directives = [], ...HTMLattrs } = props;
    const Component = as ?? "section";

    const hostElementProps = useDirectives({ classNames: [className], attrs: { ...HTMLattrs } }, [...directives, pageSectionDirective()]);

    return (
        <Component className={hostElementProps.classNames.join(" ")} {...hostElementProps.attrs}>
            {children}
        </Component>
    );
}
