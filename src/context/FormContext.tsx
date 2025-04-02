"use client";
import { createContext, useContext, ReactNode } from "react";
import { useForm } from "@/hooks/useForm";
import { Form } from "@/types/form";

interface FormContextType {
  form?: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
  onChange?: (value: string, key: keyof Form) => void;
}

const FormContext = createContext<FormContextType>({} as FormContextType);

export const FormProvider = ({ children }: { children: ReactNode }) => {
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
