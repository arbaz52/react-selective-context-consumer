import React from "react";

import { SelectiveContextConsumer } from "selective-context-consumer";

import StateContext from "contexts/StateContext";

const Beer: React.FC = () => {
  console.debug("Beer.render");

  return (
    <SelectiveContextConsumer
      context={StateContext}
      selector={({ beer, addBeer }) => ({
        beer,
        addBeer,
      })}
    >
      {(value: any) => {
        console.debug("beer.render");
        return <button onClick={value.addBeer}>{`beer: ${value.beer}`}</button>;
      }}
    </SelectiveContextConsumer>
  );
};

export default Beer;
