import Image from "next/image";


export default function HomePage() {
  return (
      <main className="text-center p-10">
        <h1 className="text-4xl font-bold">Hi, I’m Toan Le</h1>
        <p className="mt-4 text-lg">
          Welcome to my site! I’m a developer, tech enthusiast, and builder.
        </p>
        <nav className="mt-6">
          <a href="/about" className="mr-4 text-blue-500">About Me</a>
          <a href="/contact" className="text-blue-500">Contact</a>
        </nav>
      </main>
  );
}

