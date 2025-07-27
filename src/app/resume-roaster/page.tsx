"use client";

import { useState } from "react";

export default function ResumeRoaster() {
  const [input, setInput] = useState("");
  const [roast, setRoast] = useState("");

  const handleRoast = async () => {
    if (!input.trim()) {
      setRoast("⚠️ Please enter a resume to roast.");
      return;
    }

    const res = await fetch("/api/roast", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resume: input }),
    });

    const data = await res.json();
    setRoast(data.output || "❌ Failed to roast.");
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">
        🧠 Resume Roaster
      </h1>

      <div className="max-w-2xl mx-auto space-y-6">
        <textarea
          className="w-full h-48 p-4 text-black rounded-md bg-white resize-none shadow"
          placeholder="Paste your resume here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleRoast}
          className="w-full py-3 text-lg font-semibold bg-orange-600 hover:bg-orange-700 text-white rounded-md shadow transition"
        >
          🔥 Roast Me
        </button>

        {roast && (
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg shadow-md transition duration-300 whitespace-pre-wrap">
            <h2 className="text-xl font-semibold mb-3">💀 Roast Results</h2>
            <p>{roast}</p>
          </div>
        )}
      </div>
    </main>
  );
}
