"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomSelect } from "@/components/Select";
import { useFormContext } from "@/context/FormContext";
import { useResult } from "@/context/ResultContext";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";

export const Form = () => {
  const { form, onChange, marcas, modelos, anos } = useFormContext();
  const { handleGetResult } = useResult();
  return (
    <Stack spacing={2}>
      <CustomSelect
        onChange={(e: any) => onChange?.(e.target.value, "marca")}
        label="Marca"
        value={form?.marca}
        options={
          marcas?.map((marca) => ({
            value: marca.codigo,
            label: marca.nome,
          })) || []
        }
      />
      <CustomSelect
        onChange={(e: any) => onChange?.(e.target.value, "modelo")}
        label="Modelo"
        value={form?.modelo}
        options={
          modelos?.map((modelo) => ({
            value: modelo.codigo,
            label: modelo.nome,
          })) || []
        }
        disabled={!form?.marca}
      />
      <CustomSelect
        hidden={!form?.modelo}
        onChange={(e: any) => onChange?.(e.target.value, "ano")}
        label="Ano"
        value={form?.ano}
        options={
          anos?.map((ano) => ({
            value: ano.codigo,
            label: ano.nome,
          })) || []
        }
      />

      <Stack direction="row" justifyContent="center" paddingTop="16px">
        <Button
          disabled={!form?.marca || !form?.modelo || !form?.ano}
          variant="contained"
          sx={{
            width: "fit-content",
            backgroundColor: "#5D00BF",
            padding: "12px 40px",
            fontSize: "14px",
            textTransform: "none",
          }}
          onClick={handleGetResult}
        >
          Consultar preço
        </Button>
      </Stack>
    </Stack>
  );
};
