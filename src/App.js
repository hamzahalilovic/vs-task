import React from "react";
import { FaCog } from "react-icons/fa";
import Dropdown from "./components/Dropdown";
import "./App.css";
import { menu1, menu2, menu3 } from "./data/menuData";

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <h3>Sidebar (Click)</h3>
        <Dropdown
          items={menu2}
          trigger={<FaCog style={{ cursor: "pointer", fontSize: "20px" }} />}
        />
      </aside>

      <div className="content">
        <h2>Dropdown Examples</h2>

        <h4>Click Trigger (Icon)</h4>
        <Dropdown
          items={menu2}
          trigger={<FaCog style={{ fontSize: "20px", marginLeft: 10 }} />}
        />

        <h4>Hover Trigger Three Level Menu (Icon)</h4>
        <Dropdown
          items={menu3}
          trigger={<FaCog style={{ fontSize: "20px", marginLeft: 10 }} />}
          triggerOnHover
        />

        <h4>Hover Trigger (Button)</h4>
        <Dropdown
          items={menu1}
          trigger={<button>Hover me</button>}
          triggerOnHover
        />

        <h4>Click Trigger (Default)</h4>
        <Dropdown items={menu1} />

        <h4>Hover Trigger (Text)</h4>
        <Dropdown items={menu1} trigger={<p>Hover me</p>} triggerOnHover />

        <h4>Click Trigger (Text)</h4>
        <Dropdown items={menu1} trigger={<p>Hover me</p>} />
      </div>
    </div>
  );
}

export default App;
