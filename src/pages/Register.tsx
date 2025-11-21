import { formFields } from "../constants/formFields";
import { useState } from "react";
import type { FormDataType } from "../types/formDataType";
import { FormFieldRenderer } from "../components/form/formFieldRenderer";




const Register = () => {
  const [formData, setFormData] = useState<FormDataType>({
  fullname: "",
  birthdate: "",
  email: "",
  password: "",
  });
  

  const [errors, setErrors] = useState({
    fullname: "",
    birthdate: "",
    email: "",
    password: ""
  });
 
  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));

    if (value.trim() === "") {
      setErrors(prev => ({ ...prev, [name]: "Поле не може бути пустим" }));
    } else {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (!res.ok) {
      setErrors(prev => ({ ...prev, ...data.errors }));
      return;
    }

    alert("Успішна реєстрація!");
  };
  
  
  const isFormValid = Object.values(errors).every(err => err === "") &&
                      Object.values(formData).every(v => v !== "");

  return (
    <div className="flex h-screen ">
      <div className="w-[48%] min-h-[950px] bg-[url(src/img/registration.png)] bg-no-repeat bg-cover ">
        <img
          src="src/img/logo.png"
          alt="logo"
          className="xl:w-[322px] xl:h-[322px] lg:w-[280px] lg:h-[280px]"
        />
      </div>
      <div className="flex flex-col items-center py-16  px-10 w-[52%] ">
        <p
          className="
        xl:mb-[88px]
        lg:mb-20
        font-bold xl:text-[36px] lg:text-[28px] text-(--gray) text-center leading-12
        "
        >
          <span
            className="
           
          bg-linear-to-r from-(--primary-text) to-(--primary-text-light) bg-clip-text text-transparent
          "
          >
            Вступи до клубу,{" "}
          </span>
          щоб зберігати улюблені партії та відкривати нові вина
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center xl:w-[560px] lg:w-[500px] h-full" >
          <div className="flex flex-col gap-8 w-full ">
            {formFields.map(field => (
          <label
            key={field.name}
            className={`${errors[field.name] ? "text-(--error)" : "text-(--primary-text)"} 
                        flex flex-col gap-[7px] font-bold text-[18px]`}
          >
            {field.label}

            <FormFieldRenderer
              field={field}
              value={formData[field.name]}
              onChange={(val) => handleChange(field.name, val)}
              error={errors[field.name]}
            />
          </label>
        ))}
          </div>
          { !errors.password && (
            <p className="w-full mt-2 font-bold text-(--gray) text-[14px] leading-4 ">
            *Пароль має містити щонайменше 8 символів, велику й малу літеру,
            цифру та спеціальний символ.
            </p>
          )}

          <button
            disabled={!isFormValid}
            className={`
            w-full h-16 mt-[75px]
            rounded-full p-2.5 font-bold text-[32px] cursor-pointer
            ${isFormValid ? "bg-(--secondary)  text-(--primary)" : "bg-(--gray-light)  text-(--gray-medium)"}
            `}
          >
            Зараєструватись
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
