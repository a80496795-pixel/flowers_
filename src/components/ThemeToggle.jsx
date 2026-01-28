function ThemeToggle({ theme, setTheme }) {
  const dark = theme === "dark";

  const handleToggle = () => {
    setTheme(dark ? "light" : "dark");
  };

  return (
    <button className="btn-primary" onClick={handleToggle}>
      {dark ? "☀️ День" : "🌙 Ночь"}
    </button>
  );
}

export default ThemeToggle;
