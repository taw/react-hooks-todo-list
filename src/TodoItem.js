import React, { useState, useEffect } from "react";

function TodoItem() {
  let [done, setDone] = useState(false);
  let [text, setText] = useState("");

  useEffect(() => {
    console.log(`${text} is ${done ? 'DONE' : 'NOT DONE'}`)
  }, [done, text])

  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => setDone(e.target.checked)}
      />
      <input
        className={done ? "done" : "todo"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
        placeholder="do stuff"
      />
    </div>
  );
}

export default TodoItem;
