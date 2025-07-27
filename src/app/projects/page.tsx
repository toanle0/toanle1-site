export default function ProjectsPage() {
  return (
    <main className="text-center p-10">
      <h1 className="text-5xl font-bold mb-4">Projects</h1>
      <p className="text-lg text-gray-400 max-w-xl mx-auto">
        Here are some of the projects I've been working on. More coming soon!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-base-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Portfolio Site</h2>
          <p className="text-sm text-gray-400">
            This site — built with Next.js, Tailwind, and deployed with Vercel.
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Resume Roaster</h2>
          <p className="text-sm text-gray-400 mb-3">
            Paste your resume and get roasted by AI like a savage tech recruiter.
          </p>
          <a
            href="/resume-roaster"
            className="text-blue-400 font-semibold hover:underline"
            target="_blank"
          >
            🔥 Try it now →
          </a>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-sm text-gray-400">
            Another project I’m working on. Stay tuned!
          </p>
        </div>
      </div>

      <a href="/" className="mt-10 inline-block text-blue-500 hover:underline">
        ← Back Home
      </a>
    </main>
  );
}
