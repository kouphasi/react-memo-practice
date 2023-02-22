import React, { memo, useEffect } from "react";

const InputBox = memo((props) => {
  const { onChangeText, addToMemo, inputValue } = props;
  const value = inputValue;

  return (
    <div>
      <div>
        <input type="text" value={value} onChange={onChangeText} />
      </div>
      <div>
        <button onClick={addToMemo}>追加</button>
      </div>
    </div>
  );
});

export default InputBox;
