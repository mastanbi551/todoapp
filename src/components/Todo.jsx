import { useCallback, useContext, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import { AuthContext } from "./contexts";

export default function Todo(props) {
  const person = props.person;
  console.log(person);
  const [todos, setTodos] = useState([]);

  const theme = useContext(AuthContext);

  return (
    <>
      <h1>{theme ? theme : "not available"}</h1>
      {/* {
                person.map(user => (
                    <>
                        <h1>{user.name} - {user.age}</h1>
                    </>
                ))
            } */}
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}
