import "./Footer.css";

type FooterProps = {
  className?: string;
};

export const Footer = (props: FooterProps) => {
  return (
    <div className="Footer__container">
      <p className="Year">©2022 Blogfolio</p>
      <p className="">All rights reserved</p>
    </div>
  );
};
