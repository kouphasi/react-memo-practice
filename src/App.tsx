import { memo, useCallback, useEffect, useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import DogAPI from "./components/DogAPI";
import MemoList from "./components/MemoList";
const App = memo(() => {
  const [memos, setMemos] = useState([]);
  const [inputs, setInputs] = useState("");

  const onChangeText = useCallback((e) => {
    setInputs(e.target.value);
  }, []);
  const addToMemo = useCallback(() => {
    setMemos([...memos, { content: inputs }]);
    setInputs("");
  }, [inputs]);

  return (
    <div>
      <div>
        <MemoList memos={memos}></MemoList>
        <InputBox
          onChangeText={onChangeText}
          inputValue={inputs}
          addToMemo={addToMemo}
        ></InputBox>
      </div>
      <div>
        <DogAPI></DogAPI>
      </div>
    </div>
  );
});

export default App;
