import { Link } from 'react-router-dom'
import { Nav } from '../nav';
import { Logo } from '../logo';
import { Search } from '../search';
import { useEffect, useRef, useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isActive = false;

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(target) &&
      buttonRef.current &&
      !buttonRef.current.contains(target)
    ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
       <header className="px-10 pt-[58px] mb-[26px]">
        <div
          className="
        flex items-center justify-between mb-6
        "
        >
          <Logo />
          <div className="flex items-center">
            <Search />
            <div
              className="
            flex items-center gap-[7px] mr-[93px]
            text-[32px] leading-8
            "
            >
              <button
                className={`pr-[7px] border-r-2 cursor-pointer ${isActive ? "text-(--secondary)" : "text-(--gray)"}`}
              >
                UA
              </button>
              <button
                className={`cursor-pointer ${isActive ? "text-(--secondary)" : "text-(--gray)"}`}
              >
                EN
              </button>
            </div>
            <div className="flex gap-8">
              <Link to="/cart" >
                <img
                  src="src/img/icon/cart.svg"
                  alt="cart"
                  className="w-10 h-10"
                />
              </Link>
              <div className="relative">
              <button
                ref={buttonRef}
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)} >
                <img src={isOpen ? "src/img/icon/profile_active.svg" : "src/img/icon/profile.svg"} alt="profile" />
              </button>
              <div
                ref={dropdownRef}
                className={`
                  flex flex-col items-center justify-between
                absolute right-0 w-[178px] h-[137px] p-8 mt-2.5
                bg-white rounded-3xl border border-(--primary-text)
                transition-all duration-200 origin-top-right

                ${isOpen ? "opacity-100 scale-100 " : "opacity-0 scale-95 pointer-events-none"}
              `}
              >
                <Link to="/login"  className="font-bold  text-(--primary-text) text-[24px] leading-6 hover:text-(--secondary)">Вхід</Link>
                <div className="w-full h-px bg-(--primary-text)"></div>
                <Link to="/register" className="font-bold  text-(--primary-text) text-[24px] leading-6 hover:text-(--secondary)">Реєстрація</Link>
                </div>
              </div>
            
              <Link to="/favorite">
                <img src="src/img/icon/fav.svg" alt="favorite" />
              </Link>
            </div>
          </div>
        </div>
        <Nav />
      </header>

  )
}
