import Link from "next/link";
import Post1, {
  meta,
} from "@/content/mastering-next-js-boost-your-website-with-seo-friendly-techniques.mdx";

export default function Blog() {
  return (
    <>
      <main className="prose lg:prose-xl container mx-auto prose-amber mt-16">
        <header>
          <h1>{meta.title}</h1>
          <p>
            By <Link href="#">{meta.author}</Link>
          </p>
          <ul className="flex gap-8 w-full">
            {meta.categories.map((category, k) => (
              <li
                key={k}
                className="px-3 py-1.5 not-prose bg-gray-200 rounded-full flex items-center justify-center"
              >
                <Link href={""}>{category}</Link>
              </li>
            ))}
          </ul>
        </header>
        <Post1 />
      </main>
    </>
  );
}
