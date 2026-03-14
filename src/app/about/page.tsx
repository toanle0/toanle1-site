// export default function AboutPage() {
//     return (
//         <main className="text-center p-10">
//             <h1 className="text-4xl font-bold">About Me</h1>
//             <p className="mt-4 text-lg max-w-xl mx-auto">
//                 I’m Toan Le — passionate about coding, tech, and building cool projects.
//                 I love working on web apps, exploring new tools, and leveling up my skills.
//             </p>
//             <a href="/" className="mt-6 inline-block text-blue-500 hover:underline">← Back Home</a>
//         </main>
//     );
// }
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b1220] px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-bold text-center">About Me</h1>

        <div className="mt-8 flex justify-center">
          <Image
            src="/family.jpg"
            alt="Toan Le with family"
            width={500}
            height={350}
            className="rounded-xl border border-white/10 shadow-lg"
          />
        </div>

        <div className="mt-10 space-y-6 text-lg text-gray-300 leading-relaxed">

          <p>
            My name is <strong>Toan Le</strong>. I am a veteran turned
            software engineer and a Computer Science graduate from
            California State University, Long Beach.
          </p>

          <p>
            After serving in the military, I transitioned into the world
            of technology with the same mindset that guided my service:
            discipline, problem solving, and commitment to mission.
            Software engineering became a natural path for applying
            those values in a new domain.
          </p>

          <p>
            I enjoy building practical systems including web applications,
            developer tools, and cybersecurity-related projects. My work
            focuses on creating software that is reliable, useful, and
            built with long-term thinking.
          </p>

          <p>
            My long-term goal is to contribute to technology that supports
            public service, especially in areas like defense, national
            security, and government systems. I believe the same spirit of
            service that drives military work can also exist in the tech
            world through building systems that protect, support, and
            strengthen our institutions.
          </p>

          <p>
            Outside of programming, my family is the foundation of
            everything I do. They are the reason I continue pushing
            forward and building a future through technology.
          </p>

        </div>

        <div className="mt-10 text-center">
          <a
            href="/"
            className="text-blue-400 hover:underline"
          >
            ← Back Home
          </a>
        </div>

      </div>
    </main>
  );
}