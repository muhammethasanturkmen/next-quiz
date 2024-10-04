"use client"

import { useEffect, useState } from "react";

export default function DarkMode() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
      if (theme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [theme])

    return (
      <div className="headerInside">
        <img src="/images/dark-mode-sun.png" alt="" />

        <label className="switch">
          <input type="checkbox" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
          <span className="slider round"></span>
        </label>

        <img src="/images/dark-mode-moon.png" alt="" />
      </div>
    )
}