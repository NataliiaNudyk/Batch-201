
type Props = {
  placeholder?: string | undefined;
  inputType: string;
};

export const InputField: React.FC<Props> = ({ placeholder, inputType}) => {
  return (
      <input
        type={inputType}
        placeholder={placeholder}
        className={`
                w-[560px] h-12 px-[30px] py-2.5
                bg-no-repeat bg-position-[520px_center]
                bg-size-[24px]
                rounded-full border border-(--gray)
                font-bold text-[24px] text-(--gray)
          
              `}
                  />
  )
}
