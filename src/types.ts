import type { ReactNode } from "react";

export type WorkItem = {
  title: string;
  year: string;
  isPoem?: boolean;
  element: ReactNode | null;
};
