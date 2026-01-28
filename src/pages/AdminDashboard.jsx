import { useAdminData } from "../contexts/AdminDataContext";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const { stats, flowers } = useAdminData();

  return (
    <div className="admin-dashboard">
      <div className="dashboard-left">
        <div className="profile-card">
          <img 
            src={flowers[0]?.image || "https://avatars.mds.yandex.net/i?id=bec0118c0ce4921ade8bbce43c0118d26e55018b-13313278-images-thumbs&n=13"} 
            alt="Profile" 
            className="profile-pic"
          />
          <h3>{flowers[0]?.name || "Evernight"}</h3>
          <p className="story">Child of Remembrance born from the shadow</p>
        </div>

        <div className="contact-card">
          <div className="phone">
            📞 <span>5 missed calls</span>
          </div>
          <div className="messages">
            💬 <span>{stats.messagesCount || 114} unread messages</span>
          </div>
        </div>
      </div>


      <div className="dashboard-right">
   
        <div className="dashboard-grid">
          <div className="dashboard-card pink">
            <h4>🌷 Всего цветов</h4>
            <span>{stats.flowersCount}</span>
          </div>

          <div className="dashboard-card mint">
            <h4>👤 Пользователи</h4>
            <span>{stats.usersCount}</span>
          </div>

          <div className="dashboard-card gradient">
            <h4>⭐ Активность</h4>
            <span>87%</span>
          </div>

          <div className="dashboard-card soft">
            <h4>📦 Категорий</h4>
            <span>{new Set(flowers.map(f => f.category)).size}</span>
          </div>
        </div>

        {/* Graph */}
        <div className="dashboard-section">
          <h3>📈 Рост проекта</h3>
          <div className="chart">
            { [40, 65, 55, 80, 90].map((h, i) => (
              <div key={i} className="chart-bar" style={{ height: `${h}%` }} />
            )) }
          </div>
        </div>

        <div className="dashboard-bottom">
          <div className="info-card">
            <h4>💖 Популярная категория</h4>
            <p>{flowers[0]?.category || "—"}</p>
            <button className="more-btn">More ➔</button>
          </div>

          <div className="info-card">
            <h4>🕒 Последнее обновление</h4>
            <p>{new Date().toLocaleDateString()}</p>
            <button className="more-btn">More ➔</button>
          </div>

          <div className="info-card">
            <h4>⚡ Статус системы</h4>
            <p className="status-ok">Работает стабильно</p>
            <button className="more-btn">More ➔</button>
          </div>
        </div>
      </div>
    </div>
  );
}
