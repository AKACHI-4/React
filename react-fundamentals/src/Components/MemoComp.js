import React from "react";

function MemoComp({ name }) {
  console.log("Rendering Memo Component");
  return <div>{name}</div>;
}

/* React.memo is a higher-order component */
/* React.memo accepts the component adds some things to that component and returns an enhanced component */
/* Which is capable of avoiding re-renders when there is no change in props */

export default React.memo(MemoComp);
