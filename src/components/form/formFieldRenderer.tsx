import { useTranslation } from "react-i18next";
import type { FieldType } from "../../types/fieldType";
import { InputField } from "./inputField";
import { PasswordField } from "./passwordField";


type Props = {
  field: FieldType;
  value: string;
  onChange: (value: string) => void;
  error : string;
}

export const FormFieldRenderer: React.FC<Props> = ({
  field,
  value,
  onChange,
  error
}) => {
  const { t } = useTranslation("auth");

  switch (field.type) {
    case "password":
      return (
        <PasswordField
          value={value}
          onChange={onChange}
          error={error}
        />
      );

    default:
      return (
        <InputField
          placeholder={t(`register.placeholder${field.name}`)}
          inputType={field.type}
          value={value}
          onChange={onChange}
          error={error}
        />
      );
  }
};
