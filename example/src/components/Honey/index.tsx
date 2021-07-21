import React from "react";

import { SelectiveContextConsumer } from "selective-context-consumer";

import StateContext from "contexts/StateContext";
import { IStateContext } from "contexts/StateContext/types";

const Honey: React.FC = () => {
  console.debug("Honey.render");
  const selector = React.useCallback(
    ({ honey, addHoney }: IStateContext) => ({ honey, addHoney }),
    []
  );
  return (
    <SelectiveContextConsumer selector={selector} context={StateContext}>
      {(value) => {
        console.debug("honey.render");
        return (
          <button onClick={value.addHoney}>{`honey: ${value.honey}`}</button>
        );
      }}
    </SelectiveContextConsumer>
  );
};

export default Honey;
