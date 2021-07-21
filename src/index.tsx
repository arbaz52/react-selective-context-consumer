import { FC, useCallback, useState } from "react";

export const App: FC = () => {
  const [state, setState] = useState(0);
  const increment = useCallback(() => {
    setState(state + 1);
  }, []);
  return <h1 onClick={increment}>count: {state}</h1>;
};
