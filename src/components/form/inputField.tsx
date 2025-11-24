type Props = {
  placeholder?: string | undefined;
  inputType: string;
  value: string;
  onChange: (value: string) => void;
  error: string;
};

export const InputField: React.FC<Props> = ({
  placeholder,
  inputType,
  value,
  onChange,
  error,
}) => {
  return (
    <>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
                w-full h-12 px-[30px] py-2.5
                rounded-full border
                font-bold text-[24px] 
                placeholder:text-2xl! placeholder:text-(--gray-medium)!
                ${error ? "border border-(--error) text-(--error) focus:outline-none focus:bg-(--error-bg)" : "border border-(--gray) text-(--gray) bg-white "}
              `}
      />
      {error && (
        <div className="flex gap-2 w-full">
        <img
          src="src/img/icon/registration/error.svg"
          alt="error"
          className="w-6 h-6"
        />
        <p className="font-bold text-(--error) text-[14px]">
          {error}
        </p>
      </div>
      )}
    </>
  );
};
