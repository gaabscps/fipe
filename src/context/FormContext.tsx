"use client";
/* eslint-disable no-unused-vars */
import { createContext, useContext, ReactNode } from "react";
import { useForm } from "@/hooks/useForm";

export type Form = {
  marca: string;
  modelo: string;
  ano: string;
};

export type FormContextType = {
  form?: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
  onChange?: (value: string, key: keyof Form) => void;
};

const FormContext = createContext<FormContextType>({} as FormContextType);

type FormProviderProps = {
  children: ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const { form, onChange, setForm } = useForm({
    marca: "",
    modelo: "",
    ano: "",
  });

  return (
    <FormContext.Provider value={{ form, onChange, setForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
