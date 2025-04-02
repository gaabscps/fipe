"use client";
import { Result } from "@/types/result";
import { createContext, useState, useContext, ReactNode } from "react";
import { useFormContext } from "./FormContext";
import { getResult } from "@/app/actions/results";
import { Form } from "@/types/form";
interface ResultContextType {
  result: Result;
  setResult: React.Dispatch<React.SetStateAction<Result>>;
  loading: boolean;
  handleGetResult: () => Promise<void>;
}

const ResultContext = createContext<ResultContextType>({} as ResultContextType);

export const ResultProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<Result>({} as Result);
  const [loading, setLoading] = useState(true);
  const { form } = useFormContext();

  const handleGetResult = async () => {
    try {
      const data = await getResult(form as Form);
      if (data) {
        setResult(data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Erro ao obter resultado:", error);
      setLoading(false);
    }
  };

  return (
    <ResultContext.Provider
      value={{ result, setResult, loading, handleGetResult }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResult = () => useContext(ResultContext);
