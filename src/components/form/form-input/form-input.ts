// components/form/types.ts
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface FormInputProps {
  label: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}
