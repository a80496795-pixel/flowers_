import { users } from "../data/adminData";
import "./AdminPanel.css";

export default function AdminUsers() {
  return (
    <div className="admin-section">
      <h2>Пользователи</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Роль</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.email}>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
