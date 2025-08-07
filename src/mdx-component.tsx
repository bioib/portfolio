"use client";
import type { MDXComponents } from "mdx/types";

export default function MDXProvider({
  children,
  components,
}: {
  children: React.ReactNode;
  components?: MDXComponents;
}) {
  const mdxComponents = useMDXComponents(components || {});

  return <>{children}</>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
