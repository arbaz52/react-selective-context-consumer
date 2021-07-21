import { memo } from "react";

import { ISelectiveContextConsumerChildProps } from "./types";

function SelectiveContextConsumerChild<Value>({
  value,
  children,
}: ISelectiveContextConsumerChildProps<Value>) {
  return <>{children(value)}</>;
}

export const MemoizedSelectiveContextConsumerChild = memo(
  SelectiveContextConsumerChild,
  (pvProps, nxtProps) => {
    switch (typeof pvProps.value) {
      case "object":
        for (let key in pvProps.value) {
          //@ts-ignore
          if (pvProps.value[key] !== nxtProps.value[key]) return false;
        }
        break;
      default:
        if (pvProps.value !== nxtProps.value) return false;
    }
    if (pvProps.children !== nxtProps.children) return false;
    return true;
  }
) as typeof SelectiveContextConsumerChild;

export default SelectiveContextConsumerChild;
