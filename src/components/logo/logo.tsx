import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img src="src/img/logo.png" alt="logo" className="w-[90px] h-[90px]" />
    </Link>
  );
};
