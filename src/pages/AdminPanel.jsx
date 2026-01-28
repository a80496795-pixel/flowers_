import { Outlet, NavLink } from "react-router-dom";
import "./AdminPanel.css";

export default function AdminPanel() {
  return (
    <div className="admin-panel">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <NavLink to="/admin" end className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink>
          <NavLink to="/admin/users" className={({ isActive }) => isActive ? "active" : ""}>Users</NavLink>
          <NavLink to="/admin/flowers" className={({ isActive }) => isActive ? "active" : ""}>Flowers</NavLink>
        </nav>
      </aside>
      <main className="admin-main">
        <div className="admin-main-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
