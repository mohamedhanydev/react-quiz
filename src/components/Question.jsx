import { useState } from "react";
import Option from "./Option";
export default function Question({ list, dispatch }) {
  return (
    <div>
      <h4>{list.curQuestion}</h4>
      <div className="options">
        {list.curOptions.map((option, optionId) => (
          <Option key={optionId} dispatch={dispatch} list={list} id={optionId}>
            {option}
          </Option>
        ))}
      </div>
    </div>
  );
}
