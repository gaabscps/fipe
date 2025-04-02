import { apiFetch } from "@/services/api";
import { Marca, Modelo, Ano } from "@/types/form";

export const getMarcas = async (): Promise<Marca[]> => {
  try {
    const data = await apiFetch<Marca[]>(`/carros/marcas`);
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
};

export const getModelos = async (marca: string): Promise<Modelo[]> => {
  try {
    const response = await apiFetch<{ modelos: Modelo[]; anos: Ano[] }>(
      `/carros/marcas/${marca}/modelos`
    );

    if (response && response.modelos) {
      return response.modelos;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
};

export const getAnos = async (
  marca: string,
  modelo: string
): Promise<Ano[]> => {
  try {
    const data = await apiFetch<Ano[]>(
      `/carros/marcas/${marca}/modelos/${modelo}/anos`
    );
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
};
