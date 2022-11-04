import React, { useState } from "react";

import "./App.css";
import "@fastraxglobal/shared/lib/assets/global.css";
import { Button } from "@fastraxglobal/shared";

// const { Coding, Layout } = DuoTone;

// const { Cod001 } = Coding;
// const { Lay001 } = Layout;

function App() {
      const userTheme = localStorage.getItem("theme");
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
            .matches;

      const [theme, setTheme] = useState("Dark");

      const themeCheck = React.useCallback(() => {
            if (userTheme === "dark" || (!userTheme && systemTheme)) {
                  document.documentElement.classList.add("dark");
            }
      }, [userTheme, systemTheme]);

      const themeSwitch = React.useCallback(() => {
            if (document.documentElement.classList.contains("dark")) {
                  document.documentElement.classList.remove("dark");
                  localStorage.setItem("theme", "light");
            } else {
                  document.documentElement.classList.add("dark");
                  localStorage.setItem("theme", "dark");
            }
      }, [userTheme, systemTheme]);

      React.useEffect(() => {
            themeCheck();
      }, []);

      return <div id="app" className="dark:bg-slate-900"></div>;
}

export default App;
