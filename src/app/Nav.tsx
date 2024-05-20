"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const Nav: FC<{}> = (props) => {
  const path = usePathname();

  const isRscPath = path.includes("rsc");
  const isReactQueryPath = path.includes("react-query");

  return (
    <div className="flex gap-5">
      {isRscPath ? (
        <span>RSC Version</span>
      ) : (
        <Link className="text-blue-800" href="/rsc" prefetch={false}>
          RSC Version
        </Link>
      )}
      {isReactQueryPath ? (
        <span>React Query Version</span>
      ) : (
        <Link className="text-blue-800" href="/react-query" prefetch={false}>
          React Query Version
        </Link>
      )}
    </div>
  );
};
