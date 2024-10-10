"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {

    QueryClient,
    QueryClientProvider,
  } from 'react-query'

 // Create a client
export const queryClient = new QueryClient()

export function AllProvider({ children, ...props }) {
    return <QueryClientProvider client={queryClient}>
        <NextThemesProvider {...props}>{children}</NextThemesProvider>;
    </QueryClientProvider>
}

