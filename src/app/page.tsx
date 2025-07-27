import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Fabio Reva Yanda</h1>
          <div className="space-x-4">
            <Link href="#about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="#projects" className="hover:text-gray-300">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Hi, I&apos;m Fabio Reva Yanda
          </h2>
          <p className="text-lg mb-6">
            A Full-Stack Developer passionate about building modern web
            applications with Next.js, Node.js, and more.
          </p>
          <a
            href="#projects"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <p className="text-lg max-w-2xl mx-auto">
            I&apos;m a beginner full-stack developer with experience in Next.js,
            JavaScript, TypeScript, Node.js, MongoDB, MySQL, and a bit of
            WordPress. I enjoy creating user-friendly applications and learning
            new technologies to solve real-world problems.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">My Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">[Project 1 Name]</h4>
              <p className="mb-4">
                A web app built with Next.js and MongoDB to [describe
                functionality].
              </p>
              <a
                href="[Project 1 URL]"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">[Project 2 Name]</h4>
              <p className="mb-4">
                A RESTful API using Node.js and MySQL for [describe
                functionality].
              </p>
              <a
                href="[Project 2 URL]"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">[Project 3 Name]</h4>
              <p className="mb-4">
                A WordPress blog with a custom theme for [describe
                functionality].
              </p>
              <a
                href="[Project 3 URL]"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="text-lg mb-6">
            Interested in collaborating? Reach out to me!
          </p>
          <div className="space-x-4">
            <a
              href="mailto:fabioyanda@gmail.com"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Email Me
            </a>
            <a
              href="https://linked.in/in/fabio-yanda"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/bioib"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Fabio Reva Yanda. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
