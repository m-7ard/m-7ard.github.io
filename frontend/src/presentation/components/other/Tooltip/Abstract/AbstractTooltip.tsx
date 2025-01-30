import React, { ElementType, FunctionComponent, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useFixedPositioning from "../../../../hooks/useFixedPositioning";
import PolymorphicProps from "../../../../types/PolymorphicProps";
import TooltipProvider, { ITooltipPositioning } from "../TooltipProvider";
import { useTooltipContext } from "../TooltipProvider.TooltipContext";
import { AbstractTooltipContext, useAbstractTooltipContext } from "./AbstractTooltip.Context";

const defaultElement = "div";

export default function AbstractTooltip(props: {
    Trigger: FunctionComponent<{ open: boolean; onToggle: () => void }>;
    Panel: (props: { onClose: () => void }) => React.ReactNode;
    positioning: ITooltipPositioning;
}) {
    const { Trigger, Panel, positioning } = props;
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => setOpen(false), []);

    return (
        <AbstractTooltipContext.Provider value={{ onClose: onClose }}>
            <TooltipProvider positioning={positioning}>
                <Trigger open={open} onToggle={() => setOpen(!open)} />
                {open && createPortal(<Panel onClose={onClose} />, document.body)}
            </TooltipProvider>
        </AbstractTooltipContext.Provider>
    );
}

//
// Panel
//

type THostElementProps = React.JSX.IntrinsicAttributes & PropsWithChildren<{
    ref: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}>;

type AbstractTooltipPanelProps = {
    render: (tooltipPanelProps: THostElementProps) => React.ReactNode;
};

export function AbstractTooltipDefaultPanel(props: PropsWithChildren<AbstractTooltipPanelProps>) {
    const { children, render } = props;
    const { onClose } = useAbstractTooltipContext();

    //
    //
    // Positioning
    //
    const {
        elements: { setTargetElement, targetElement, referenceElement },
        positioning,
    } = useTooltipContext();

    const { positionFlag } = useFixedPositioning({ positioning, targetElement, referenceElement });

    //
    //
    // On outside click
    //
    const closeOnOutsideClick = useCallback(
        (e: MouseEvent) => {
            if (!targetElement?.contains(e.target as Node)) {
                onClose();
            }
        },
        [targetElement, onClose],
    );

    useEffect(() => {
        if (positionFlag == false) return;
        window.addEventListener("click", closeOnOutsideClick);
        return () => window.removeEventListener("click", closeOnOutsideClick);
    }, [closeOnOutsideClick, positionFlag]);

    const hostElementProps: THostElementProps = { ref: setTargetElement };

    return render({ children, ...hostElementProps });
}

//
// Trigger
//

type AbstractTooltipTriggerProps<E extends ElementType> = PolymorphicProps<E> & {};

export function AbstractTooltipTrigger<E extends ElementType>(props: AbstractTooltipTriggerProps<E>) {
    const { children, as, ...rest } = props;
    const {
        elements: { setReferenceElement },
    } = useTooltipContext();
    const Component = as ?? defaultElement;

    return (
        <Component {...rest} ref={setReferenceElement}>
            {children}
        </Component>
    );
}
