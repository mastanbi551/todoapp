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

  console.log(user);
  return (
    <>
      <div className="header">Welcome {user}</div>
      <button type="button" onClick={(e) => onLogOut(e)}>
        LogOut
      </button>
    </>
  );
}
