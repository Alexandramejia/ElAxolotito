import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css'; // make sure this includes Tailwind directives

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 text-center p-6">
      <div className="flex justify-center items-center space-x-8 my-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-24 hover:drop-shadow-lg transition" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="w-24 hover:drop-shadow-lg transition" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Vite + React + Tailwind</h1>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded hover:bg-indigo-600 transition"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-100 px-1 py-0.5 rounded">src/App.jsx</code> and save to test HMR.
        </p>
      </div>

      <p className="mt-6 text-gray-500">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
}

export default App;

