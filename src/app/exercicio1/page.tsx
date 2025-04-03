"use client";

import { useForm } from "@/hooks/useForm";
import { maskify } from "@/utils/exercicio1";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Box,
  Card,
  CardContent,
} from "@mui/material";

export default function Exercicio1Page() {
  const { form, onChange } = useForm({ text: "" });
  const result = maskify(form.text);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, "text");
  };

  return (
    <Container maxWidth="sm" sx={{ py: "120px" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h4" gutterBottom>
          Exercício 1 - Máscara de Texto
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            fullWidth
            label="Digite um texto"
            value={form.text}
            onChange={handleInputChange}
            placeholder="Digite um texto"
          />

          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Resultado:
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{ fontFamily: "monospace" }}
              >
                {result || "Nenhum resultado ainda"}
              </Typography>
            </CardContent>
          </Card>

          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Como funciona?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A função substitui todos os caracteres por &quot;#&quot; exceto os
              últimos 4 caracteres. Se o texto tiver 4 caracteres ou menos, ele
              é retornado sem alterações.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
