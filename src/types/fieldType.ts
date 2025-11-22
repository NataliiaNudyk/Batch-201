import type { FormDataType } from "./formDataType";

export type FieldType = {
  name: keyof FormDataType; 
  type: string;
};