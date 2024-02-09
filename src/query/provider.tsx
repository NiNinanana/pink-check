"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface QueryProviderProps {
  children: ReactNode;
}

const QueryProvider = ({ children }: QueryProviderProps) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: { retry: 3, staleTime: 60 * 1000 },
    },
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
