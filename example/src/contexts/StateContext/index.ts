import React from "react";

import { IStateContext } from "./types";

const defaultValue: IStateContext = {
  beer: 0,
  honey: 0,
  addBeer: () => {},
  addHoney: () => {},
};

const StateContext = React.createContext(defaultValue);

export default StateContext;
