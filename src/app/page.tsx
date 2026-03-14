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
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <h1 className="text-5xl font-bold">Hi, I’m Toan Le</h1>

      <p className="max-w-lg mx-auto text-lg text-gray-600">
        Software Engineer focused on web development,
        cybersecurity, and building practical software projects.
      </p>

      <video
        controls
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full max-w-md rounded-lg shadow-lg"
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <a
        href="/about"
        className="btn btn-primary mt-2"
      >
        Learn More About Me
      </a>
    </main>
  );
}