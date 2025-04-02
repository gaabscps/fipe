"use client";
import { Box, Container, Typography, CircularProgress } from "@mui/material";
import { useResult } from "@/context/ResultContext";
import { getText } from "@/utils/text";
export const Result = () => {
  const { result, loading } = useResult();
  const isResultEmpty = Object.keys(result).length === 0;

  return (
    <Container
      sx={{
        backgroundColor: "#DCF5F2",
        display: isResultEmpty ? "none" : "flex",
        padding: "64px 16px 40px",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography fontWeight="700" textAlign="center" variant="h4">
            Tabela Fipe: Preço {getText(result?.Marca, 2)}{" "}
            {getText(result?.Modelo, 0)} {result?.AnoModelo}
          </Typography>
          <Box
            padding="8px 16px"
            bgcolor="#00a38d"
            width="fit-content"
            borderRadius="99px"
          >
            <Typography textAlign="center" variant="h4" color="white">
              R$ {getText(result?.Valor, 1).split(",")[0]}
            </Typography>
          </Box>
          <Typography
            fontWeight="500"
            textAlign="center"
            variant="body1"
            color="gray"
          >
            Este é o preço de compra do veículo.
          </Typography>
        </>
      )}
    </Container>
  );
};
