import { useEffect } from "react";

type Props = {
  setAgeConfirmed: React.Dispatch<React.SetStateAction<boolean | null>>;
  ageConfirmed: null | boolean;
}

export const AgeGate: React.FC<Props> = ({ setAgeConfirmed, ageConfirmed }) => {
  
  const handleYes = () => {
    sessionStorage.setItem('ageConfirmed', 'true');
    setAgeConfirmed(true);
  };

    useEffect(() => {
    document.body.style.overflow = !ageConfirmed ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [ageConfirmed]);


  return (

    <div className="
    flex justify-center items-center absolute overflow-hidden
    w-full h-screen z-100
  bg-[#400505B8] backdrop-blur-xs
  "
    >
      <div className="
      flex flex-col justify-between relative
      w-[718px] h-[258px]
      bg-(--secondary) rounded-4xl p-10 font-bold text-(--primary-text) text-[32px]
      "
      >
        <p>Тобі вже виповнилось 18? - тоді заходь у партію</p>
        <div className="flex justify-center gap-[132px]">
          <button onClick={handleYes} className="
          h-[58px] w-[217px]
          bg-transparent border-4 border-(--primary) rounded-full
          hover:bg-(--primary) hover:text-(--secondary) focus:bg-(--primary) focus:text-(--secondary)
          "
          >
            Так</button>
          <button onClick={() => window.location.href = "https://google.com"} className="
          h-[58px] w-[217px]
          bg-transparent border-4 border-(--primary) rounded-full
          hover:bg-(--primary) hover:text-(--secondary) focus:bg-(--primary) focus:text-(--secondary)
          "
          >
            Ні</button>
        </div>
      </div>
    </div>
  )
} 
