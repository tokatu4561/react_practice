import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        type="text"
        value={todoText}
        onChange={onChange}
        name=""
        id=""
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
