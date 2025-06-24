// import styles from '../css/style.css';

import { useContext } from "react";
import { AuthContext, AuthenticatedUserContext } from "./contexts";

export default function Header(props) {
  const theme = useContext(AuthContext);
  const user = useContext(AuthenticatedUserContext);

  function onLogOut(e) {
    e.preventDefault();
    props.setIsAuth(false);
  }

  const person = [
    {
      name: "Mastanbi",
      age: 29,
    },
    {
      name: "test",
      age: 60,
    },
  ];

  console.log(user);
  return (
    <>
      <div className="header">Welcome {user}</div>
      <div>
        {person.map((p) => (
          <li key={p.age}>
            {p.name} - {p.age}
          </li>
        ))}
      </div>
      <button type="button" onClick={(e) => onLogOut(e)}>
        LogOut
      </button>
    </>
  );
}
