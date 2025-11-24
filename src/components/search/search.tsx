import { useTranslation } from "react-i18next";

export const Search = () => {
  const { t } = useTranslation("common");
  return (
              <input
        type="search"
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
                className="
               w-[469px] h-[54px] pl-[52px] mr-[70px] pr-[42px] py-[13px]
              font-[Cuprum] text-2xl text-(--gray)
              rounded-full border-2 border-(--primary-text)
              bg-[url(src/img/icon/search.svg)] bg-no-repeat bg-position-[10px]
              placeholder:text-2xl! placeholder:text-(--gray-light)!
              focus:placeholder:text-(--primary-text)! 
              "
                placeholder={t("navigation.search")}
            />
  )
}
