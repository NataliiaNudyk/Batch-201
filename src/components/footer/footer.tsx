import { Link } from "react-router-dom";
import { Logo } from "../logo";
import { navLinkFooter, navLinkFooterMain, navLinkSocialMedia } from "../../constants/navLink";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-10  h-[170px] bg-(--primary-text)">
      <Logo />
      <div className="flex items-center gap-[236px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-[42px] text-4xl text-(--secondary)">
            {navLinkFooterMain.map((link) => (
              <Link to={link.path} key={link.name}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-[38px] text-[18px] text-(--secondary)">
            <p>© 2025 BATCH#201</p>
            {navLinkFooter.map((link) => (
              <Link to={link.path} key={link.name}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-[58px]">
          <a
            href="tel:+306723456111"
            className="flex items-center justify-center w-20 h-20 bg-(--secondary) rounded-full"
          >
            <img src="src/img/icon/call.svg" alt="call" className="w-10 h-10" />
          </a>
          <div className="flex items-center gap-4">
            {navLinkSocialMedia.map(item => (
              <a
                key={item.name}
              href={item.path}
              className="w-8 h-8"
            >
              <img src={item.image} alt={item.name} />
            </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
