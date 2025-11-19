import { useState } from "react";
import { InputField } from "../inputField"

type Props = { 
  inputType: string;
  image: string | undefined;
  imageActive: string | undefined;
}

export const PasswordFiels: React.FC<Props> = ({inputType, image, imageActive}) => {
  const [show, setShow] = useState<boolean>(false);
  
  return (
    <>
      <InputField inputType={show ? "text" : inputType} />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-3 w-6 h-6"
      >
        <img src={show ? imageActive : image} />
      </button>
      </>
  )
}
