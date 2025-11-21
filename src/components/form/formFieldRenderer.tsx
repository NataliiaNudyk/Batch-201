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
          placeholder={field.placeholder}
          inputType={field.type}
          value={value}
          onChange={onChange}
          error={error}
        />
      );
  }
};
