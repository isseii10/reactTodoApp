import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
  return (
    <div style={style}>
      <input
        placeholder="todoを入力"
        value={todoText}
        onChange={onChangeTodoText}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};

export default InputTodo;
