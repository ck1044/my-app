import { Button } from "../ui/button";

import { ReactNode } from "react";

export function Submit({ children }: { children: ReactNode }) {
  return (
    <Button type="submit" className="w-full">
      {children}
    </Button>
  );
}
