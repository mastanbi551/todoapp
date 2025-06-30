import Header from "../routingConcepts/components/Header";
import Footer from "../routingConcepts/components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../routingConcepts/components/Sidebar";
import { useState } from "react";
export default function Layout() {
  const [showSidebar, setShowSidebar] = useState(true);

  function handleClick() {
    console.log("click");
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      <Header showSidebar={showSidebar} click={handleClick} />
      <div style={{ display: "flex", minHeight: "80vh" }}>
        <Sidebar showSidebar={showSidebar} />
        <main style={{ flex: 1, padding: "10px" }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
