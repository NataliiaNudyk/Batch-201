import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const Home = () => {
  const { t } = useTranslation("home");

  return (
   <div>
   <div className="flex flex-col justify-center items-center h-[540px] w-full bg-(--primary-text)">
     <img src="src/img/logo.png" alt="logo" className="w-[360px] h-[360px]" />
        <button className="
     w-[438px] h-16 
     rounded-full bg-(--secondary) 
     cursor-pointer
     "
        ><Link to="/catalog" className="text-(--primary-text) font-bold text-[40px]">{t("buttons.goToCatalog")}</Link></button>
   </div>

      <div>
        <section className="pr-[42px] mt-16">
          <h2 className="
        mb-20
        text-[64px] font-bold text-center
        bg-linear-to-r from-(--primary-text) to-(--primary-text-light) bg-clip-text text-transparent
        "
          >{t("manifestoSection.title")}</h2>
         
          <div className="flex items-center gap-6">
            <img src="src/img/manifestoPage/bottles.jpg" alt="bottle"
              className="
              h-[334px] w-[593px] rounded-e-3xl object-cover 
              shadow-[20px_0_100px_#A33B3BB8]
              "
            />
            <div className="w-24 h-0.5 bg-linear-to-r from-(--primary-text) to-(--primary-text-light) rounded-full"></div>
            <div className="w-[666px] ">
              <h3 className="mb-6 text-bold text-(--primary-text) text-[48px]">{t("manifestoSection.subtitle")}</h3>
              <p className="text-bold text-(--gray) text-[40px]">{t("manifestoSection.text")}</p>
            </div>
        </div>
        </section>
        <section className="flex flex-col items-center gap-11 mt-[131px] mb-28 px-10">
          <h1 className="
          text-[80px] font-bold
          bg-linear-to-r from-(--primary-text) to-(--primary-text-light) bg-clip-text text-transparent
          "
          >{t("notMarketplace.title")}</h1>
          <div className="h-[193px] w-0.5 bg-linear-to-r from-(--primary-text) to-(--primary-text-light) rounded-full"></div>
          <div className="flex items-center justify-center relative top-[59px] mb-[122px] w-[600px] rounded-full shadow-[0px_0px_1000px_20px_#A78C4C]">
          <p className="
               absolute 
              text-bold text-(--primary-text) text-[64px] text-center text-shadow-[4px_4px_3px_#00000040]
              "
          >
             {t("notMarketplace.subtitle")}</p>
            </div>
        </section>
        <div className="
        h-[589px] w-full
        bg-[url(src/img/manifestoPage/wineBottle.png)] bg-no-repeat bg-contain
        "
        ></div>
          <section className="flex flex-col mb-[134px] items-center px-10">
          <h3 className="font-bold text-(--primary-text) text-[48px] leading-[82px] text-center">{t("weSpeakEasy.subtitle")}</h3>
            <div className="mb-10 h-[135px] w-0.5 bg-(--secondary) rounded-full"></div>
            <h2 className="mb-[105px] font-bold text-(--primary-text) text-[64px]">{t("weSpeakEasy.title")}</h2>
          <h2 className="
            font-bold text-(--primary-text) text-[64px] text-shadow-[4px_4px_3px_#00000040]
            "
          >{t("weSpeakEasy.text")}</h2>
        </section>
        <section className="flex gap-6 pl-10 mb-[114px]">
          <p className="w-[553px] font-bold text-(--gray) text-[40px]">{t("everyBatch.text")}</p>
          <img src="src/img/manifestoPage/glasses.png" alt="wine glases"
          className="w-[823px] h-[259px] rounded-s-3xl object-cover object-[50%_45%]"
          />
        </section>
        <section className="mb-[295px] py-10 text-center">
          <h2 className="font-bold text-(--primary-text) text-[64px]">{t("fineWineCulture.title")}</h2>
          <h2 className="mt-[175px] mb-[110px] font-bold text-(--secondary) text-[64px]">{t("fineWineCulture.subtitle")}</h2>
          <h2 className="font-bold text-(--primary-text) text-[64px]">{t("fineWineCulture.text")}</h2>
        </section>
      </div>
</div>
  )
}

export default Home