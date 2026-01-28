import "./AdminUsers.css";
import { useAdminData } from "../contexts/AdminDataContext";

export default function AdminUsers() {
  const { users } = useAdminData();

  return (
    <div className="admin-users">
      <h2>Пользователи</h2>
      {users && users.length ? (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Роль</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.email}>
                <td>{u.email}</td>
                <td>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Пользователи не найдены</p>
      )}
    </div>
  );
}
