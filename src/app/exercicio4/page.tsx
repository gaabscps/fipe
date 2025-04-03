"use client";

import { useState } from "react";
import { useForm } from "@/hooks/useForm";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";
import { checkIfTheFirstLetterIsUppercase } from "@/utils/exercicio4";

export default function Exercicio4Page() {
  const { form, onChange } = useForm({ text: "" });
  const [result, setResult] = useState<boolean | null>(null);

  const handleCheck = () => {
    const isUppercase = checkIfTheFirstLetterIsUppercase(form.text);
    setResult(isUppercase);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, "text");
    setResult(null);
  };

  return (
    <Container maxWidth="sm" sx={{ py: "120px" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Exercício 4 - Verificador de Primeira Letra Maiúscula
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Digite uma palavra"
            value={form.text}
            onChange={handleInputChange}
            placeholder="Ex: Palavra"
            fullWidth
            variant="outlined"
          />

          <Button
            onClick={handleCheck}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Verificar
          </Button>

          {result !== null && (
            <Alert severity={result ? "success" : "error"} sx={{ mt: 2 }}>
              {result
                ? "A primeira letra é maiúscula!"
                : "A primeira letra não é maiúscula."}
            </Alert>
          )}

          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Como funciona?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A função verifica se a primeira letra da palavra digitada é
              maiúscula. Ela retorna true se a primeira letra for maiúscula e
              false caso contrário. A verificação é feita comparando o primeiro
              caractere da string com sua versão em maiúsculo.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
