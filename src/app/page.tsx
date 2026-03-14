// export default function HomePage() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center">
//
//       <h1 className="text-5xl font-bold">Hi, I’m Toan Le</h1>
//
//       <p className="max-w-lg">
//         Senior CS Student @ CSULB — Web & Cybersecurity enthusiast.
//       </p>
//
//       <video
//         controls
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="w-[400px] rounded-lg shadow-lg"
//       >
//         <source src="/intro.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//
//       <a href="/about" className="btn btn-primary">
//         Learn More About Me
//       </a>
//
//     </main>
//   );
// }
// export default function HomePage() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
//       <h1 className="text-5xl font-bold">Hi, I’m Toan Le</h1>
//
//       <p className="max-w-lg">
//         Senior CS Student @ CSULB — Web & Cybersecurity enthusiast.
//       </p>
//
//       <video
//         controls
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="w-full max-w-md rounded-lg shadow-lg"
//       >
//         <source src="/intro.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//
//       <a href="/about" className="btn btn-primary">
//         Learn More About Me
//       </a>
//     </main>
//   );
// }
// export default function HomePage() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
//       <h1 className="text-5xl font-bold">Hi, I’m Toan Le</h1>
//
//       <p className="max-w-lg mx-auto text-lg text-gray-600">
//         Software Engineer focused on web development,
//         cybersecurity, and building practical software projects.
//       </p>
//
//       <video
//         controls
//         muted
//         loop
//         playsInline
//         preload="metadata"
//         className="w-full max-w-md rounded-lg shadow-lg"
//       >
//         <source src="/intro.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//
//       <a
//         href="/about"
//         className="btn btn-primary mt-2"
//       >
//         Learn More About Me
//       </a>
//     </main>
//   );
// }
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1220] px-6 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[320px_1fr]">
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
          <video
            controls
            muted
            loop
            playsInline
            preload="metadata"
            className="mb-6 w-full rounded-xl"
          >
            <source src="/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h2 className="text-2xl font-bold">Toan Le</h2>
          <p className="mt-2 text-sm text-gray-300">
            Software Engineer • Cybersecurity • CSULB
          </p>

          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold">Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Location: California</p>
              <p>Email: your-email@example.com</p>
              <p>GitHub: github.com/toanle1</p>
              <p>LinkedIn: linkedin.com/in/your-linkedin</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
            I build practical software projects focused on web development,
            cybersecurity, and tools that solve real problems.
          </div>

          <div className="mt-8 flex gap-3">
            <a href="/about" className="btn btn-primary">
              About Me
            </a>
            <a href="/projects" className="btn btn-outline">
              Projects
            </a>
          </div>
        </aside>

        <section className="rounded-2xl border border-white/10 bg-black/30 p-8 shadow-xl">
          <header className="border-b border-white/10 pb-6">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
              Portfolio
            </p>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">Toan Le</h1>
            <p className="mt-3 text-xl text-gray-300">
              Computer Science graduate building web apps, cybersecurity labs,
              and AI-powered tools.
            </p>
          </header>

          <section className="pt-8">
            <h2 className="text-2xl font-semibold">Profile</h2>
            <p className="mt-4 max-w-3xl leading-7 text-gray-300">
              I am a Computer Science graduate from CSULB with a strong interest
              in software engineering, cybersecurity, and practical technical
              projects. My work includes web applications, browser extensions,
              automation tools, and security-focused labs. I enjoy building
              systems that are useful, clear, and reliable.
            </p>
          </section>

          <section className="pt-10">
            <h2 className="border-b border-white/10 pb-3 text-2xl font-semibold">
              Featured Projects
            </h2>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Chrome Tab Manager</h3>
                <p className="mt-1 text-sm text-gray-400">
                  React • TypeScript • Chrome Extension
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
                  <li>
                    Built a tab grouping and management extension to organize and
                    optimize browser workflows.
                  </li>
                  <li>
                    Added features for saving groups, improving navigation, and
                    reducing tab clutter.
                  </li>
                  <li>
                    Focused on performance, usability, and clean UI structure.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Resume Roaster</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Next.js • API Routes • OpenAI
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
                  <li>
                    Built a resume feedback tool that analyzes resumes and
                    returns direct, useful critiques.
                  </li>
                  <li>
                    Added API protection and validation for safer public use.
                  </li>
                  <li>
                    Designed the project as a practical web app with real user
                    value.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Cybersecurity Labs & Tools
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Python • Networking • Security
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
                  <li>
                    Built and tested small lab environments for security
                    learning, troubleshooting, and hands-on practice.
                  </li>
                  <li>
                    Worked with system tools, networking concepts, and workflow
                    automation.
                  </li>
                  <li>
                    Focused on practical skills that translate to real IT and
                    security roles.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="pt-10">
            <h2 className="border-b border-white/10 pb-3 text-2xl font-semibold">
              Skills
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Python",
                "HTML",
                "CSS",
                "Tailwind",
                "Git",
                "REST APIs",
                "Cybersecurity",
                "Networking",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="pt-10">
            <h2 className="border-b border-white/10 pb-3 text-2xl font-semibold">
              Education
            </h2>
            <div className="mt-6">
              <h3 className="text-xl font-semibold">
                California State University, Long Beach
              </h3>
              <p className="mt-1 text-gray-300">
                B.S. in Computer Engineering and Computer Science
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}