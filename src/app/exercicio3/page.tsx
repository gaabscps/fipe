"use client";

import { useEffect, useState } from "react";
import { getRickAndMortyCharacters } from "@/app/actions/rickAndMorty";
import {
  Container,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";

interface Character {
  nome: string;
  genero: string;
  avatar: string;
  especie: string;
}

export default function Exercicio3Page() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getRickAndMortyCharacters();
        setCharacters(data);
      } catch (err) {
        setError("Erro ao carregar os personagens");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          Exercício 3 - Rick and Morty API
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: "center",
              }}
            >
              {characters.map((character) => (
                <Box
                  key={character.nome}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "calc(50% - 12px)",
                      md: "calc(33.333% - 16px)",
                    },
                    minWidth: "280px",
                    maxWidth: "400px",
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <CardContent>
                      <Box
                        component="img"
                        src={character.avatar}
                        alt={character.nome}
                        sx={{
                          width: "100%",
                          height: "auto",
                          borderRadius: 1,
                          mb: 2,
                        }}
                      />
                      <Typography variant="h6" gutterBottom>
                        {character.nome}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gênero: {character.genero}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Espécie: {character.especie}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          )}

          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Como funciona?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Esta aplicação faz uma chamada à API Rick and Morty para buscar
              informações dos principais personagens da série. Os dados são
              formatados e exibidos em cards com imagem, nome, gênero e espécie
              de cada personagem.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
