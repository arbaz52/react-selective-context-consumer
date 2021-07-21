import React from "react";

import Beer from "components/Beer";
import Honey from "components/Honey";

const Component: React.FC = () => {
  return (
    <>
      <Beer />
      <Honey />
    </>
  );
};

export const MemoizedComponent = React.memo(Component);

export default Component;
