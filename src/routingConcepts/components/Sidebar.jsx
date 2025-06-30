import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Sidebar(props) {
  return props.showSidebar ? (
    <aside style={{ width: "200px", background: "#eee", padding: "10px" }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </aside>
  ) : (
    <aside style={{ width: "80px", background: "#eee", padding: "10px" }}>
      <nav>
        <ul>
          <li>
            <FaHome />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
