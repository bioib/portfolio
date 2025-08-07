// /app/blog/posts/[slug]/page.tsx
import { readdirSync } from "fs";
import { join as pathJoin } from "path";
import { type PostMeta } from "@/lib/types";
import dynamic from "next/dynamic";

export async function generateStaticParams() {
  const contentsDirectory = pathJoin(process.cwd(), "src/contents");
  const files = readdirSync(contentsDirectory).filter((f) =>
    f.endsWith(".mdx")
  );
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PageProps) {
  const MDXContent = dynamic(
    () =>
      import(`${process.cwd()}/src/contents/${params.slug}.mdx`).then(
        (mod) => mod.default
      ),
    {
      ssr: true,
    }
  );

  const meta = MDXContent.meta as PostMeta;

  return (
    <main className="prose mx-auto p-4">
      <h1>{meta.title || params.slug}</h1>
      {meta.date && <p className="text-gray-500">Published: {meta.date}</p>}
      {meta.description && <p className="text-gray-600">{meta.description}</p>}
      <MDXContent />
    </main>
  );
}
