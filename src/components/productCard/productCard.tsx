import { useState } from "react"
import {  useNavigate } from "react-router-dom";

export const ProductCard = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
   <div className="w-full min-w-[322px] p-6 cursor-pointer" onClick={() => navigate("/")}>
        
          <div className="relative ">
            <div className="flex justify-between w-full absolute left-0 top-0">
              <p className="text-(--gray) text-[24px] font-bold">#7011</p>
              <button
              onClick={(e) => {
                e.stopPropagation()
                setIsActive(!isActive);
              }
              }
                className="cursor-pointer w-10 h-10"><img src={isActive ? "src/img/icon/card_fav-active.svg" : "src/img/icon/card_fav.svg"} alt="favorite" /></button>
          </div>
            <img src="src/img/test.png" alt="bottle" className="w-fit h-[332px] object-contain" />
          </div>
          <div className="flex flex-col items-center text-center mt-[9px] mb-4">
            <h3 className="text-(--primary-text) font-bold text-[20px] leading-5">Taylor’s 40 Year Old Tawny Port</h3>
            <p className="mt-1 mb-2 text-(--gray)">Червоне, Напівсолодке, Кріплене</p>
          <p className="text-(--primary-text) font-bold text-[20px] leading-5">16 900 ₴</p>
          </div>
        <button
           onClick={(e) => 
                e.stopPropagation()
              }
            className={`
            w-full h-[34px] 
            rounded-full p-2.5 font-bold text-[20px] cursor-pointer leading-5
            bg-(--secondary)  text-(--primary) hover:bg-(--secondary-hover)
            `}
          >
            Додати у кошик
          </button>
    </div>
  )
}
