import { Link } from 'react-router-dom'
import { Nav } from '../nav';
import { Logo } from '../logo';

export const Header = () => {
  const isActive = false;
  return (
       <header className="px-10 pt-[58px] mb-[26px]">
        <div
          className="
        flex items-center justify-between mb-6
        "
        >
          <Logo />
          <div className="flex items-center">
            <input
              type="text"
              className="
            w-[469px] h-[54px] pl-[52px] pr-[42px] py-[13px] mr-[70px]
            font-[Cuprum] text-2xl text-(--primary-text)
            rounded-full border-2 border-(--primary-text)
            bg-[url(src/img/icon/search.svg)] bg-no-repeat bg-position-[10px]
            "
              placeholder="Пошук"
            />
            <div
              className="
            flex items-center gap-[7px] mr-[93px]
            text-[32px] leading-8
            
            "
            >
              <button
                className={`pr-[7px] border-r-2 ${isActive ? "text-(--secondary)" : "text-(--gray)"}`}
              >
                UA
              </button>
              <button
                className={`${isActive ? "text-(--secondary)" : "text-(--gray)"}`}
              >
                EN
              </button>
            </div>
            <div className="flex gap-8">
              <Link to="#">
                <img
                  src="src/img/icon/cart.svg"
                  alt="cart"
                  className="w-10 h-10"
                />
              </Link>
              <Link to="#">
                <img src="src/img/icon/profile.svg" alt="profile" />
              </Link>
              <Link to="#">
                <img src="src/img/icon/fav.svg" alt="favorite" />
              </Link>
            </div>
          </div>
        </div>
        <Nav />
      </header>

  )
}
