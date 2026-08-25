import type { ReactNode } from "react";

type CalloutKind = "tip" | "warning";

export function Callout({ kind, children }: { kind: CalloutKind; children: ReactNode }) {
  return (
    <aside className={`callout callout--${kind}`}>
      <strong>{kind === "tip" ? "Route Tip" : "Spoiler Warning"}</strong>
      <div>{children}</div>
    </aside>
  );
}
