import Image from "next/image";


// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="hero min-h-[60vh] bg-base-200">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold">Hi, I’m Toan Le</h1>
          <p className="py-6 max-w-lg">
            Senior CS Student @ CSULB — Web & Cybersecurity enthusiast.
          </p>
          <a href="/about" className="btn btn-primary">Learn More About Me</a>
        </div>
      </div>
    </div>
  );
}
