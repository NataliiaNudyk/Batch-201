import { formFields } from "../constants/formFields";
import { InputField } from "../components/inputField";
import { PasswordFiels } from "../components/passwordField/passwordFiels";

const Register = () => {

  return (
    <div className="flex min-h-screen">
      <div className="w-[48%] h-screen bg-[url(src/img/registration.png)] bg-no-repeat bg-cover">
        <img
          src="src/img/logo.png"
          alt="logo"
          className="w-[322px] h-[322px]"
        />
      </div>
      <div className="flex flex-col items-center h-full mt-16 px-10 w-[52%]">
        <p
          className="
        mb-[88px]
        font-bold text-[36px] text-(--gray) text-center
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

        <form action="" className="flex flex-col items-center">
          <div className="flex flex-col gap-8 ">
            {formFields.map((field) => (
              <label
                htmlFor=""
                key={field.name}
                className="flex flex-col gap-[7px] font-bold text-[18px] text-(--primary-text)"
              >
                {field.label}
                <div className="relative w-[560px]">
                  {field.type === "password" ? (
                    <PasswordFiels
                      inputType={field.type}
                      image={field.image}
                      imageActive={field.imageActive}
                    />
                  ):(
                      <InputField placeholder={field.placeholder} inputType={field.type} />)
                    }
                </div>
              </label>
            ))}
          </div>
          <p className="w-[560px] mb-[75px] mt-2 font-bold text-(--gray) text-[14px]">
            *Пароль має містити щонайменше 8 символів, велику й малу літеру,
            цифру та спеціальний символ.
          </p>

          <button className="w-[560px] h-16 rounded-full p-2.5 bg-(--gray-light) font-bold text-[32px] text-(--gray-medium)">
            Зараєструватись
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
