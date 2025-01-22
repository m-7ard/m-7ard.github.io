import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";

type PolymorphicAsProp<E extends ElementType> = {
    as?: E;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>>;

export default PolymorphicProps;