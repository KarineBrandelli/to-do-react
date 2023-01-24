import React, { useState } from "react";
import "./App.css";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";

export function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header />
        <div className="center">
          <div className="container">
            <div className="title">
              <h1>TODO</h1>

              <div className="toggle-switch">
                <label>
                  <input className="toggle" type="checkbox" />
                  <span className="slider" onClick={toggleTheme}></span>
                </label>
              </div>
            </div>
            <NewTask />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}
