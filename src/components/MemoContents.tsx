import React, { memo } from "react";

const MemoContents = memo((props) => {
  const { children } = props;
  return (
    <div>
      <div>{children}</div>
    </div>
  );
});

export default MemoContents;
