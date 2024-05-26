"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { globalQueryClient } from "./queryClient";

export const Providers: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [queryClient] = useState(globalQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
};
