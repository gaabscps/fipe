/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/api.ts

interface FetchOptions {
  cache?: RequestCache;
  revalidate?: number;
  method?: string;
  body?: any;
  headers?: HeadersInit;
}

export async function apiFetch<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
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
}
