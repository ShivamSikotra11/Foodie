import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  console.log(element.classList);

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.getItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.getItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    else {
      setTheme("light");
    }
  }

  return (
    <div className="relative">
      <img
        src="website/dark-mode-button.png"
        className={`w-12 absolute right-0 cursor-pointer z-10 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300
        ${theme!=="dark"?"opacity-0":"opacity-100"}
        `}
        alt=""
        onClick={changeTheme}
      />

      <img
        src="website/light-mode-button.png"
        className={`w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300
        `}
        alt=""
        onClick={changeTheme}
      />
    </div>
  );
};
export default DarkMode;
