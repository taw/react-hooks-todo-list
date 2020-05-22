import React, { useState } from "react";

function TodoItem() {
  let [done, setDone] = useState(false);
  let [text, setText] = useState("do stuff");

  return (
    <div className="todoItem">
      <input type="checkbox" checked={done} onClick={() => setDone(d => !d)} />
      <span class={done ? 'done' : 'todo'}>{ text }</span>
    </div>
  );
}

export default TodoItem;
