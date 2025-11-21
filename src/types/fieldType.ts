import type { FormDataType } from "./formDataType";

export type FieldType = {
  name: keyof FormDataType; 
  label: string;
  type: string;
  placeholder?: string;
};