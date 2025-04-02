"use client";
/* eslint-disable no-unused-vars */
import { createContext, useState, useContext, ReactNode } from "react";

export type Form = {
  marca: string;
  modelo: string;
  ano: string;
};

export type FormContextType = {
  form: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
  handleChange?: (value: string, key: keyof Form) => void;
};

const FormContext = createContext<FormContextType>({} as FormContextType);

type FormProviderProps = {
  children: ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [form, setForm] = useState<Form>({
    marca: "",
    modelo: "",
    ano: "",
  });

  const handleChange = (value: string, key: keyof Form) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <FormContext.Provider value={{ form, setForm, handleChange }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
