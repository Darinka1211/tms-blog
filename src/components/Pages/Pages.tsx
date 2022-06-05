import "./Pages.css";
import Left from "../Img/Left.svg";
import Right from "../Img/Right.svg";

type PagesProps = {
  className?: string;
};

export const Pages = (props: PagesProps) => {
  return (
    <div className="Pages__container">
      <div className="previousPages">
        <p className="leftArrow">
          <img className="imgPages" src={Left} alt="" /> Prev
        </p>
      </div>
      <div className="numberPages">
        <p className="pNumber">1</p>
        <p className="pNumber">2</p>
        <p className="pNumber">3</p>
        <p className="pNumber">...</p>
        <p className="pNumber">6</p>
      </div>
      <div className="nextPages">
        <p className="rightArrow">
          Next <img className="imgPages" src={Right} alt="" />
        </p>
      </div>
    </div>
  );
};
