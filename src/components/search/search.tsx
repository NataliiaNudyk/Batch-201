import { useState } from "react"
import { useTranslation } from "react-i18next";

export const Search = () => {
  const [value, setValue] = useState<string>("");
  const { t } = useTranslation("common");
  return (
   <div className="relative w-[469px] mr-[70px]">
              <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
                className="
               w-full h-[54px] pl-[52px] pr-[42px] py-[13px]
              font-[Cuprum] text-2xl text-(--primary-text)
              rounded-full border-2 border-(--primary-text)
              bg-[url(src/img/icon/search.svg)] bg-no-repeat bg-position-[10px]
              placeholder:text-2xl! placeholder:text-(--gray-light)!
              "
                placeholder={t("navigation.search")}
            />
            {value && (
        <button
          className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-(--primary-text) cursor-pointer"
        onClick={() => setValue("")}
        >X</button>
            ) }
            </div>
  )
}
