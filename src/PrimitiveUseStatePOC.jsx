import React from 'react';

export default function PrimitiveUseState() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">🔬 Primitive UseState POC</h1>
      <p className="mb-6 text-gray-300">This is a proof of concept demonstrating how React's useState hook works internally.</p>
      
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-green-400">📋 How it works:</h2>
        <ul className="space-y-2 text-gray-300">
          <li>• <span className="text-yellow-400">Unique tokens:</span> Each component instance gets a unique Symbol identifier</li>
          <li>• <span className="text-yellow-400">External state maps:</span> States stored externally, not in components</li>
          <li>• <span className="text-yellow-400">Global context:</span> currentlyRenderedCompInstance controls which component is active</li>
          <li>• <span className="text-yellow-400">Automatic association:</span> useState uses current token to get/set correct state</li>
        </ul>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3 text-purple-400">💡 The Secret:</h3>
        <p className="text-gray-300 mb-4">
          React hooks aren't magic! They rely on the renderer knowing which component is currently executing.
        </p>
        <div className="bg-gray-900 border border-gray-600 rounded p-4 font-mono text-sm text-green-300">
          <div className="text-gray-500">// Simplified version:</div>
          <div className="mt-2">
            <span className="text-blue-300">let</span> <span className="text-white">currentlyRenderedCompInstance</span><span className="text-gray-500">;</span>
          </div>
          <div>
            <span className="text-blue-300">const</span> <span className="text-white">compStates</span> <span className="text-gray-500">=</span> <span className="text-blue-300">new</span> <span className="text-yellow-300">Map</span><span className="text-gray-500">();</span>
          </div>
          <div className="mt-2">
            <span className="text-blue-300">function</span> <span className="text-yellow-300">useState</span><span className="text-gray-500">(</span><span className="text-white">initialState</span><span className="text-gray-500">) {'{'}</span>
          </div>
          <div className="ml-4">
            <span className="text-gray-500">// Magic happens here! 🪄</span>
          </div>
          <div className="text-gray-500">{'}'}</div>
        </div>
      </div>
    </div>
  );
}

// https://stackoverflow.com/questions/53729917/react-hooks-whats-happening-under-the-hood