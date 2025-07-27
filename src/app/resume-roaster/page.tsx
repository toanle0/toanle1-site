'use client';

import { useState } from 'react';

export default function ResumeRoaster() {
  const [input, setInput] = useState('');
  const [roast, setRoast] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRoast = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/roast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume: input }),
      });
      const data = await res.json();
      setRoast(data.result || 'No response');
    } catch (err) {
      setRoast('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🧠 Resume Roaster</h1>
      <textarea
        className="w-full p-4 border border-gray-300 rounded-md mb-4 min-h-[200px]"
        placeholder="Paste your resume here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleRoast}
        disabled={loading || !input}
        className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 disabled:opacity-50"
      >
        {loading ? 'Roasting...' : '🔥 Roast Me'}
      </button>

      {roast && (
        <div className="mt-8 p-4 bg-gray-100 border border-gray-300 rounded-md whitespace-pre-wrap">
          <h2 className="text-xl font-semibold mb-2">💀 Roast Results</h2>
          <p>{roast}</p>
        </div>
      )}
    </main>
  );
}
