"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useForm } from "@/hooks/useForm";
import { getAnos, getMarcas, getModelos } from "@/app/actions/formOptions";
import { Ano, Marca, Modelo, Form } from "@/types/form";

interface FormContextType {
  form?: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
  onChange?: (value: string, key: keyof Form) => void;
  marcas?: Marca[];
  modelos?: Modelo[];
  anos?: Ano[];
}

const FormContext = createContext<FormContextType>({} as FormContextType);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [anos, setAnos] = useState<Ano[]>([]);

  const { form, onChange, setForm } = useForm({
    marca: "",
    modelo: "",
    ano: "",
  });

  useEffect(() => {
    const fetchMarcas = async () => {
      const data = await getMarcas();
      if (data && Array.isArray(data)) {
        setMarcas(data);
      } else {
        setMarcas([]);
      }
    };
    fetchMarcas();
  }, []);

  useEffect(() => {
    const fetchModelos = async () => {
      if (form?.marca) {
        const data = await getModelos(form.marca);
        if (data && Array.isArray(data)) {
          setModelos(data);
          setForm((prev: Form) => ({ ...prev, modelo: "" }));
        } else {
          setModelos([]);
        }
      } else {
        setModelos([]);
      }
    };
    fetchModelos();
  }, [form?.marca]);

  useEffect(() => {
    const fetchAnos = async () => {
      if (form?.marca && form?.modelo) {
        const data = await getAnos(form.marca, form.modelo);
        if (data && Array.isArray(data)) {
          setAnos(data);
          setForm((prev: Form) => ({ ...prev, ano: "" }));
        } else {
          setAnos([]);
        }
      } else {
        setAnos([]);
      }
    };
    fetchAnos();
  }, [form?.modelo]);

  return (
    <FormContext.Provider
      value={{ form, onChange, setForm, marcas, modelos, anos }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
