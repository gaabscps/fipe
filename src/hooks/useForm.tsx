/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const useForm = <T extends Record<string, any>>(initialValues: T) => {
  const [form, setForm] = useState<T>(initialValues);

  const onChange = (value: string, name: keyof T) => {
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, setForm, resetForm };
};
