// import Image from "next/image";
//
//
// // src/app/page.tsx
// export default function HomePage() {
//   return (
//     <div className="hero min-h-[60vh] bg-base-200">
//       <div className="hero-content text-center">
//         <div>
//           <h1 className="text-5xl font-bold">Hi, I’m Toan Le</h1>
//           <p className="py-6 max-w-lg">
//             Senior CS Student @ CSULB — Web & Cybersecurity enthusiast.
//           </p>
//           <a href="/about" className="btn btn-primary">Learn More About Me</a>
//         </div>
//       </div>
//     </div>
//   );
// }
//
//
// export default function HomePage() {
//   return (
//     <main className="relative min-h-screen overflow-hidden">
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 h-full w-full object-cover"
//       >
//         <source src="/intro.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//
//       <div className="absolute inset-0 bg-black/30" />
//
//       <div className="relative z-10 flex min-h-screen items-center justify-center text-white text-center px-6">
//         <div>
//           <h1 className="text-5xl font-bold">Hi, I’m Toan Le</h1>
//           <p className="py-6 max-w-lg mx-auto">
//             Senior CS Student @ CSULB — Web & Cybersecurity enthusiast.
//           </p>
//           <a href="/about" className="btn btn-primary">
//             Learn More About Me
//           </a>
//         </div>
//       </div>
//     </main>
//   );
// }
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center">

      <h1 className="text-5xl font-bold">Hi, I’m Toan Le</h1>

      <p className="max-w-lg">
        Senior CS Student @ CSULB — Web & Cybersecurity enthusiast.
      </p>

      <video
        controls
        autoPlay
        muted
        loop
        playsInline
        className="w-[400px] rounded-lg shadow-lg"
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <a href="/about" className="btn btn-primary">
        Learn More About Me
      </a>

    </main>
  );
}