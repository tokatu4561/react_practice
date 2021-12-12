import React from "react";

export const IncompleteTodos = (props) => {
  const { onClickComplete, todos, onClickDel } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDel(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
