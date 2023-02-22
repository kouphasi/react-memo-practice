import React, { memo } from "react";
import MemoContents from "./MemoContents";
import "../assets/css/memo_container.css";
const MemoList = memo((props) => {
  const { memos } = props;

  return (
    <div>
      <ul>
        {memos.map((memo_one, index) => {
          return (
            <li key={index}>
              <div className="container">
                <MemoContents>{memo_one.content}</MemoContents>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default MemoList;
