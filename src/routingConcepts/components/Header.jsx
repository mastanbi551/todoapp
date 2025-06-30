import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export default function Header(props) {
  console.log(props);
  return (
    <div class="header-block">
      <CiMenuBurger onClick={props.click} class="menu-icon" />
      <h1>Header</h1>
    </div>
  );
}
