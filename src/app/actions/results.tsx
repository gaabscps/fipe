import { apiFetch } from "@/services/api";
import { Form } from "@/types/form";
import { Result } from "@/types/result";

export const getResult = async (form: Form) => {
  try {
    const data: Result = await apiFetch(
      `/carros/marcas/${form?.marca}/modelos/${form?.modelo}/anos/${form?.ano}`
    );
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};
