import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside style={{ width: "220px", background: "#f5f5f5", padding: "20px" }}>
      <h3>Управление</h3>
      <ul>
        <li><Link to="/admin/users">Пользователи</Link></li>
        <li><Link to="/admin/flowers">Цветы</Link></li>
      </ul>
    </aside>
  );
}
