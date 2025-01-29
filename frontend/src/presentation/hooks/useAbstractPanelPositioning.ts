import { useTooltipContext } from "../components/other/Tooltip/TooltipProvider.TooltipContext";
import useFixedPositioning from "./useFixedPositioning";

export default function useAbstractPanelPositioning() {
    const {
        elements: { targetElement, referenceElement },
        positioning,
    } = useTooltipContext();
    
    return useFixedPositioning({ positioning, targetElement, referenceElement });
}