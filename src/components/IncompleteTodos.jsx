import React from "react";

const IncompleteTodos = (props) => {
  const { Todos, onClickConplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {Todos.map((todo, idx) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickConplete(idx)}>完了</button>
              <button onClick={() => onClickDelete(idx)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteTodos;
