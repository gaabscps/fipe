"use client";
import { Result } from "@/types/result";
/* eslint-disable no-unused-vars */
import { createContext, useState, useContext, ReactNode } from "react";

export type ResultContextType = {
  result: Result;
  setResult: React.Dispatch<React.SetStateAction<Result>>;
};

const ResultContext = createContext<ResultContextType>({} as ResultContextType);

export const ResultProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<Result>({
    TipoVeiculo: 1,
    Valor: "R$ 96.382,00",
    Marca: "VW - VolksWagen",
    Modelo: "AMAROK High.CD 2.0 16V TDI 4x4 Dies. Aut",
    AnoModelo: 2014,
    Combustivel: "Diesel",
    CodigoFipe: "005340-6",
    MesReferencia: "abril de 2025",
    SiglaCombustivel: "D",
  } as Result);

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResult = () => useContext(ResultContext);
