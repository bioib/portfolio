import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/mobile-nav";
import ThemeToggle from "@/components/theme-toggle";

const projects = [
  {
    name: "Next.js Portfolio Website",
    description:
      "A personal portfolio built with Next.js, TypeScript, and TailwindCSS, featuring dynamic project showcases and responsive design.",
    url: "https://github.com/bioib/nextjs-portfolio",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "MongoDB Blog Platform",
    description:
      "A full-stack blog application using Next.js for the frontend and MongoDB for data storage, supporting user authentication and markdown posts.",
    url: "https://github.com/bioib/mongodb-blog-platform",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Task Manager API",
    description:
      "A RESTful API built with TypeScript and MongoDB, providing endpoints for managing tasks, users, and authentication.",
    url: "https://github.com/bioib/task-manager-api",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "TailwindCSS UI Kit",
    description:
      "A collection of reusable UI components styled with TailwindCSS, designed for rapid prototyping in Next.js projects.",
    url: "https://github.com/bioib/tailwindcss-ui-kit",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

const contactLinks = [
  {
    name: "Email",
    url: "mailto:fabioyanda@gmail.com",
  },
  {
    name: "LinkedIn",
    url: "https://linked.in/in/fabio-yanda",
  },
  {
    name: "GitHub",
    url: "https://github.com/bioib",
  },
];

export default function Home() {
  return (
    <div>
      {/* Mobile Navbar */}
      <MobileNav />
      {/* Navbar */}
      <nav className="bg-mantle shadow-base hidden p-6 shadow-md md:flex">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Fabio Reva Yanda</h1>
          <div className="gap-4 font-medium flex items-center justify-center">
            <Link
              href="#about"
              className="hover:text-text-hover hover:bg-surface-0 rounded px-4 py-2 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-text-hover hover:bg-surface-0 rounded px-4 py-2 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-text-hover hover:bg-surface-0 rounded px-4 py-2 transition-colors duration-300"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-4xl font-bold">
            Hi, I&apos;m Fabio Reva Yanda
          </h2>
          <p className="text-subtext mb-6 text-lg">
            A Full-Stack Developer passionate about building modern web
            applications with Next.js, Node.js, and more.
          </p>
          <a
            href="#projects"
            className="bg-blue text-mantle hover:bg-blue-hover rounded px-4 py-2 font-semibold transition-colors"
          >
            View My Work
          </a>
        </div>
      </section>

      <hr className="text-surface-0 mx-auto w-4/5 rounded-full border-1" />

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-6 text-3xl font-bold">About Me</h3>
          <p className="mx-auto max-w-2xl text-lg">
            I&apos;m a beginner full-stack developer with experience in Next.js,
            JavaScript, TypeScript, Node.js, MongoDB, MySQL, and a bit of
            WordPress. I enjoy creating user-friendly applications and learning
            new technologies to solve real-world problems.
          </p>
        </div>
      </section>

      <hr className="text-surface-0 mx-auto w-4/5 rounded-full border-1" />

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="mb-10 text-center text-3xl font-bold">My Projects</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-surface-0 shadow-mantle rounded p-6 shadow"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={160}
                  className="mb-4 h-40 w-full rounded object-cover"
                />
                <h4 className="mb-2 text-xl font-semibold">{project.name}</h4>
                <p className="text-subtext mb-4">{project.description}</p>
                <a
                  href={project.url}
                  className="text-blue hover:text-blue-hover font-medium transition-colors"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="text-surface-0 mx-auto w-4/5 rounded-full border-1" />

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h3 className="mb-6 text-3xl font-bold">Get in Touch</h3>
          <p className="mb-6 text-lg">
            Interested in collaborating? Reach out to me!
          </p>
          <div className="space-x-4">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                className="bg-blue text-mantle hover:bg-blue-hover rounded px-4 py-2 font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-crust shadow-crust text-text px-4 py-4 text-center shadow">
        <p>
          &copy; {new Date().getFullYear()} Fabio Reva Yanda. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
