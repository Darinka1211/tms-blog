import React from "react";
import "./BurgerMenu.scss";
import { ReactComponent as Sun } from "./icon/sun.svg";
import { ReactComponent as Moon } from "./icon/moon.svg";

import { Button } from "../Button/Button";
import { useTheme } from "../../features/theme";

type BurgerMenuProps = {
  firstName?: string;
  lastName?: string;
};

export const BurgerMenu = ({ firstName, lastName }: BurgerMenuProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`burger-menu ${theme && "burger-menu--dark-theme"}`}>
      <div>
        <Button
          text="Home"
          onClick={() => console.log("Text")}
          className="button--style-burger-menu"
          disabled={false}
        />
        <Button
          text="Add post"
          onClick={() => console.log("Text")}
          className="button--add-post button--style-burger-menu"
          disabled={false}
        />
      </div>
      <div>
        <div className="burger-menu__theme">
          <Button
            icon={<Sun />}
            onClick={() => toggleTheme()}
            className={`button--theme button--style-burger-menu ${
              theme && "button--dark-theme-false"
            }`}
            disabled={false}
          />
          <Button
            icon={<Moon />}
            onClick={() => toggleTheme()}
            className={`button--style-burger-menu ${
              theme ? "button--dark-theme-true" : "button--dark-theme-false"
            }`}
            disabled={false}
          />
        </div>
        <Button
          text="Log Out"
          onClick={() => console.log("Text")}
          className="button--login-button button--style-burger-menu"
          disabled={false}
        />
      </div>
    </div>
  );
};
