import { readdirSync, readFileSync } from "fs";
import { NextResponse } from "next/server";
import { compile } from "@mdx-js/mdx";

export async function GET() {
  const contentsDirectory = process.cwd() + "/src/content";
  const contents = readdirSync(contentsDirectory).filter(
    (file) => file.endsWith(".mdx") || file.endsWith(".md")
  );

  const posts = await contents.map(async (file) => {
    const filePath = `${contentsDirectory}/${file}`;
    const content = readFileSync(filePath, "utf-8");
    const mdxSource = await compile(content, {
      outputFormat: "function-body",
    });

    return String(mdxSource);
  });
  return NextResponse.json(posts);
}
