/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { updateData } from "@/utils/exercicio2";
import {
  Box,
  Typography,
  Button,
  Paper,
  Container,
  Card,
  CardContent,
} from "@mui/material";

const UpdateData: React.FC = () => {
  const [result, setResult] = useState<Record<string, any>>({});

  const handleExample1 = () => {
    const base = { name: "Marcos", country: "Brasil", age: 22 };
    const update = { country: "Japão", age: 33 };
    setResult(updateData(base, update));
  };

  const handleExample2 = () => {
    const base = { name: "Marcos", country: "Brasil", age: 22 };
    const update = {
      price: 89.9,
      amount: 15,
      description: "camiseta 100% algodão",
    };
    setResult(updateData(base, update));
  };

  const handleExample3 = () => {
    const base = { name: "Rafael", country: "Chile", age: 42 };
    const update = { name: "Camiseta Polo", price: 59.9, amount: 30 };
    setResult(updateData(base, update));
  };

  return (
    <Container maxWidth="sm" sx={{ py: "120px" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h4" gutterBottom>
          Exercício 2 - Função UpdateData
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Exemplo 1
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Base: {'{ name: "Marcos", country: "Brasil", age: 22 }'}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Update: {'{ country: "Japão", age: 33 }'}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleExample1}
                sx={{ mt: 2 }}
              >
                Executar Exemplo 1
              </Button>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Exemplo 2
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Base: {'{ name: "Marcos", country: "Brasil", age: 22 }'}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Update:{" "}
                {
                  '{ price: 89.9, amount: 15, description: "camiseta 100% algodão" }'
                }
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleExample2}
                sx={{ mt: 2 }}
              >
                Executar Exemplo 2
              </Button>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Exemplo 3
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Base: {'{ name: "Rafael", country: "Chile", age: 42 }'}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Update: {'{ name: "Camiseta Polo", price: 59.9, amount: 30 }'}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleExample3}
                sx={{ mt: 2 }}
              >
                Executar Exemplo 3
              </Button>
            </CardContent>
          </Card>

          {Object.keys(result).length > 0 && (
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Resultado:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "monospace",
                    whiteSpace: "pre-wrap",
                    bgcolor: "grey.100",
                    p: 2,
                    borderRadius: 1,
                  }}
                >
                  {JSON.stringify(result, null, 2)}
                </Typography>
              </CardContent>
            </Card>
          )}

          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Como funciona?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A função recebe um objeto base e um objeto de atualização,
              retornando um novo objeto que combina as propriedades de ambos. Se
              houver propriedades com o mesmo nome, os valores do objeto de
              atualização substituem os valores do objeto base.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default UpdateData;
