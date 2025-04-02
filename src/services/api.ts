/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/api.ts
import { Result } from "@/types/result";

type FetchOptions = {
  cache?: RequestCache;
  revalidate?: number;
  method?: string;
  body?: any;
  headers?: HeadersInit;
};

export async function apiFetch<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  try {
    const {
      cache = "no-store",
      revalidate,
      method = "GET",
      body,
      headers = {},
    } = options;

    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      cache,
      next: revalidate ? { revalidate } : undefined,
    };

    const response = await fetch(
      process.env.NEXT_PUBLIC_BASEURL + path,
      fetchOptions
    );

    if (!response.ok) {
      throw new Error(`Erro ao buscar ${path}: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro na requisição: ${error.message}`);
    }
    throw new Error('Erro desconhecido na requisição');
  }
}

export async function buscarPrecoFipe(marca: string, modelo: string, ano: string) {
  try {
    const response = await apiFetch<Result>(`/api/fipe/${marca}/${modelo}/${ano}`);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao buscar preço da Fipe: ${error.message}`);
    }
    throw new Error('Erro desconhecido ao buscar preço da Fipe');
  }
}
