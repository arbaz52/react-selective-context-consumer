import { useContext, useMemo } from "react";

import { MemoizedSelectiveContextConsumerChild } from "../SelectiveContextConsumerChild";

import { ISelectiveContextConsumerProps } from "./types";

function SelectiveContextConsumer<Context, Value>({
  context,
  selector,
  children,
}: ISelectiveContextConsumerProps<Context, Value>) {
  const contextObj = useContext(context);

  const selection = useMemo(() => selector(contextObj), [selector, contextObj]);

  return (
    <MemoizedSelectiveContextConsumerChild
      value={selection}
      children={children}
    />
  );
}

export default SelectiveContextConsumer;
