import { Link } from "react-router-dom"
import { Logo } from "../logo"


export const Footer = () => {
  return (
 <footer className="flex items-center justify-between p-10  h-[170px] bg-(--primary-text)">
        <Logo />
        <div className="flex items-center gap-[236px]">
          <div className="flex flex-col gap-4">
          <div className="flex items-center gap-[42px] text-4xl text-(--secondary)">
            <Link to="/">FAQ</Link>
            <Link to="/">Доставка</Link>
            <Link to="/">Контакти</Link>
            </div>
            <div className="flex items-center gap-[38px] text-[18px] text-(--secondary)">
              <p>© 2025 BATCH#201</p>
              <Link to="/">Terms</Link>
              <Link to="/">Privacy</Link>
              <Link to="/">Cookies</Link>
            </div>
          </div>
          <div className="flex items-center gap-[58px]">
            <a href="tel:+306723456111" className="w-20 h-20"><img src="src/img/icon/call.png" alt="call" /></a>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/?locale=uk_UA" className="w-8 h-8"><img src="src/img/icon/facebook.png" alt="facebook"  /></a>
              <a href="https://x.com/?lang=uk" className="w-8 h-8"><img src="src/img/icon/x.png" alt="x" /></a>
              <a href="https://www.instagram.com/" className="w-8 h-8"><img src="src/img/icon/instagram.png" alt="instagram"/></a>
            </div>
          </div>
        </div>
      </footer>
  )
}
