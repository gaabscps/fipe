"use client";

interface Character {
  nome: string;
  genero: string;
  avatar: string;
  especie: string;
}

interface RickAndMortyCharacter {
  id: number;
  name: string;
  gender: string;
  species: string;
}

export async function getRickAndMortyCharacters(): Promise<Character[]> {
  try {
    const characterIds = [1, 2, 3, 4, 5];
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterIds.join(",")}`
    );
    const data = await response.json();

    const formattedCharacters = data.map(
      (character: RickAndMortyCharacter) => ({
        nome: character.name,
        genero: character.gender === "Male" ? "Homem" : "Mulher",
        avatar: `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`,
        especie: character.species === "Human" ? "Humano" : "Alien",
      })
    );

    return formattedCharacters;
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    throw error;
  }
}
