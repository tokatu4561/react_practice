import React from "react";

export const CompleteTodos = (props) => {
  const { onClickBack, todos } = props;
  return (
    <div class="complete-area">
      <p class="title">完了したTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
