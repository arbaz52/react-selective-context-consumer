import React from "react";

import { MemoizedComponent } from "components/Component";

import StateContext from "contexts/StateContext";

import { IStateContext } from "contexts/StateContext/types";

const App: React.FC = () => {
  console.debug("App.render");
  const [beer, addBeer] = React.useReducer((state) => state + 1, 0);
  const [honey, addHoney] = React.useReducer((state) => state + 1, 0);

  const stateContext = React.useMemo<IStateContext>(
    () => ({
      beer,
      honey,
      addBeer,
      addHoney,
    }),
    [beer, honey]
  );

  return (
    <StateContext.Provider value={stateContext}>
      <MemoizedComponent />
    </StateContext.Provider>
  );
};

export default App;
