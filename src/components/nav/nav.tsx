import { NavLink } from "react-router-dom";
import { navLink } from "../../constants/navLink";
import { useTranslation } from "react-i18next";

export const Nav = () => {
  const { t } = useTranslation("common");
  return (
    <nav>
      <ul
        className="
            flex justify-center items-center gap-[129px]
            text-[32px] font-bold "
      >
        {navLink.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `px-2 ${
                  isActive
                    ? "pb-1 text-(--secondary) border-b rounded-b-lg"
                    : "text-(--primary-text)"
                }`
              }
            >
              {t(`navigation.${link.name}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
