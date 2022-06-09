import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { ReactComponent as BurgerOpen } from "../Img/BurgerOpen.svg";
import { ReactComponent as BurgerClose } from "../Img/BurgerClose.svg";
import { ReactComponent as Search } from "../Img/Search.svg";

import "./Header.css";

type HeaderProps = {
  className?: string;
  image?: string;
};

export const Header = (props: HeaderProps) => {
  const [isSearchPanelVisible, setIsSearchPanelVisible] = useState(false);
  const toggleVisible = () => {
    setIsSearchPanelVisible(
      (isSearchPanelVisible): boolean => !isSearchPanelVisible
);
  };

  return (
    <div className="header__container">
      <div className="header__burger">
        <Button text="" icon={<BurgerOpen />} className="burger " />
      </div>
      {isSearchPanelVisible && (
        <Input className="header" type="search" placeholder="Search..." />
      )}
      <div className="search__container">
        <div className="header__search">
          <Button
            text=""
            icon={<Search />}
            onClick={toggleVisible}
            className="search"
          />
        </div>
        <div className="header__user">
          <span className="UserName__abbr">AM</span>
          <span className="UserName">Artem Malkin</span>
        </div>
      </div>
    </div>
  );
};
