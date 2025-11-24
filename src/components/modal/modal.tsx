import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Props = {
  setAgeConfirmed?: React.Dispatch<React.SetStateAction<boolean | null>>;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  ageConfirmed?: null | boolean;
  registerModal?: boolean;
};

export const Modal: React.FC<Props> = ({
  setAgeConfirmed,
  ageConfirmed,
  registerModal,
  setIsModalOpen,
}) => {
  const { t } = useTranslation("common");
  const navigate = useNavigate();

  const handleYes = () => {
    if (registerModal) {
      if (setIsModalOpen) {
        return setIsModalOpen(false);
      }
    }
    sessionStorage.setItem("ageConfirmed", "true");
    if (setAgeConfirmed) {
      setAgeConfirmed(true);
    }
  };

  const handleNo = () => {
     if (registerModal) {
      if (setIsModalOpen) {
        return navigate("/");
       }
    }
    window.location.href = "https://google.com";
   };


  useEffect(() => {
  const hide = registerModal || !ageConfirmed; 
  document.body.style.overflow = hide ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [registerModal, ageConfirmed]);


  return (
    <div
      className="
    flex justify-center items-center absolute overflow-hidden
    w-full h-screen z-999
  bg-[#400505B8] backdrop-blur-xs
  "
    >
      <div
        className={`flex flex-col justify-between relative
      w-[718px] h-[258px]
      bg-(--secondary) rounded-4xl p-10 font-bold text-(--primary-text)  text-center
      ${registerModal ? "text-[24px]" : "text-[32px]"}
      `}
      >
        {registerModal ? (
          <div>
          <p>{t("modal.registerTitle")}</p>
            <p>{t("modal.registerQuestion")}</p>
            </div>
        ) : (
          <p>{t("modal.ageGateTitle")}</p>
          
        )}
        <div className="flex justify-center gap-[132px]">
          <button
            onClick={handleYes}
            className="
          h-[58px] w-[217px]
          bg-transparent border-4 border-(--primary) rounded-full
          hover:bg-(--primary) hover:text-(--secondary) focus:bg-(--primary) focus:text-(--secondary)
          "
          >
            {registerModal ? t("modal.registerYes") : t("modal.ageGateYes")}
          </button>
          <button
            onClick={handleNo}
            className="
          h-[58px] w-[217px]
          bg-transparent border-4 border-(--primary) rounded-full
          hover:bg-(--primary) hover:text-(--secondary) focus:bg-(--primary) focus:text-(--secondary)
          "
          >
            {registerModal ? t("modal.registerNo") : t("modal.ageGateNo")}
          </button>
        </div>
      </div>
    </div>
  );
};