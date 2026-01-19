import { useState, useEffect } from "react";

function ThemeToggle() {
    const [dark, setDark] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
    );

    useEffect(() => {
        document.body.className = dark ? "dark" : "light";
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <button className="btn-primary" onClick={() => setDark(!dark)}>
            {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
}

export default ThemeToggle;
