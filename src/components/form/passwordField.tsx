import { useState } from "react";
import { InputField } from "./inputField"


type Props = { 
  value: string;
  onChange: (value: string) => void;
  error: string;
}

export const PasswordField: React.FC<Props> = ({value, onChange, error }) => {
  const [show, setShow] = useState<boolean>(false);
  
  return (
    <div className="relative w-full flex flex-col gap-[7px]">
      <InputField
        inputType={show ? "text" : "password"}
        value={value}
        onChange={onChange} 
        error={error}
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-3 w-6 h-6"
      >
        <img
          src={show ? "src/img/icon/registration/eye.png" : "src/img/icon/registration/eye-off.png"}
          alt="toggle password visibility"
        />
      </button>
      </div>
  )
}
