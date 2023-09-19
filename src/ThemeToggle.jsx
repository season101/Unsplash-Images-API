import React from 'react';
import { useGlobalContext } from './Context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon"></BsFillSunFill>
        ) : (
          <BsFillMoonFill className="toggle-icon"></BsFillMoonFill>
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
