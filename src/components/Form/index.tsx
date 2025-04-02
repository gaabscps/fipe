"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomSelect } from "@/components/Select";
import { FormProvider, useForm } from "@/context/FormContext";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";

export const Form = () => {
  const { form, handleChange } = useForm();

  return (
    <FormProvider>
      <Stack spacing={2}>
        <CustomSelect
          onChange={(e: any) => handleChange?.(e.target.value, "marca")}
          label="Marca"
          value={form?.marca}
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
        <CustomSelect
          onChange={(e: any) => handleChange?.(e.target.value, "modelo")}
          label="Modelo"
          value={form?.modelo}
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
        <CustomSelect
          onChange={(e: any) => handleChange?.(e.target.value, "ano")}
          label="Ano"
          value={form?.ano}
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
        <Stack direction="row" justifyContent="center" paddingTop="16px">
          <Button
            disabled={!form?.marca || !form?.modelo || !form?.ano}
            variant="contained"
            sx={{
              width: "fit-content",
              backgroundColor: "#5D00BF",
              padding: "12px 40px",
              fontSize: "12px",
            }}
          >
            Consultar Preço
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};
