import { useContext, useState } from "react";
import { AuthenticatedUserContext } from "./contexts";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("Vijaya");

  const authenticatedUser = useContext(AuthenticatedUserContext);

  function handleSubmit(e) {
    console.log(todo);
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div className="form">
      <h1>Welcome {authenticatedUser}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
