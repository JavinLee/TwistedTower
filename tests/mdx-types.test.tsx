import { expectTypeOf, test } from "vitest";
import type { JSX as ReactJSX } from "react";
import type { MDXContent, MDXProps } from "mdx/types";

type React19MDXContent = (props: MDXProps) => ReactJSX.Element;

test("MDX content types use the React 19 JSX namespace", () => {
  expectTypeOf<MDXContent>().toMatchTypeOf<React19MDXContent>();
});
