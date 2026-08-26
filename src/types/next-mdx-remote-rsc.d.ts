declare module "next-mdx-remote/rsc" {
  import type { ReactElement } from "react";

  export function MDXRemote(props: {
    source: string;
    components?: Record<string, unknown>;
  }): Promise<ReactElement | null>;
}
