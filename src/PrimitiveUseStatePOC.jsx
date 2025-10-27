import React from 'react';

let state = [];
let index = 0;

function useState(initialState) {
  const localIndex = index;
  if (typeof state[localIndex] === 'undefined') {
    state[localIndex] = initialState;
  }
  index++;
  return [
    state[localIndex],
    (newState) => {
      state[localIndex] = newState;
    }
  ];
}

function render(component) {
  index = 0;
  return component();
}

export default function PrimitiveUseState() {
  const [, setForceUpdate] = React.useState(0);

  const triggerRerender = () => {
    setForceUpdate(prev => prev + 1);
  };

  function CounterComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
      triggerRerender();
    };

    const decrement = () => {
      setCount(count - 1);
      triggerRerender();
    };

    return (
      <section className="bg-gray-800 rounded-lg p-6">
        <div className="mb-6 text-center">
          <div className="text-sm text-gray-400 mb-2">Contador:</div>
          <div className="text-3xl font-bold text-white mb-4">{count}</div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={decrement}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold"
            >
              -
            </button>
            <button
              onClick={increment}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold"
            >
              +
            </button>
          </div>
        </div>
      </section>
    );
  }

  const renderedWithRender = render(CounterComponent);

  return (
    <section className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-400">
            Handmade useState Hook
          </h1>
        </div>

        <div className="space-y-4">
          {renderedWithRender}
        </div>

        <div className="mt-8 bg-gray-700 p-4 rounded">
          <h3 className="text-yellow-400 mb-3 font-semibold">🔍 Debug:</h3>
          <div className="font-mono text-sm">
            <div className="text-gray-300 mb-2">
              Index atual: <span className="text-yellow-300">{index}</span>
            </div>
            {state.map((val, i) => (
              <div key={i} className="text-gray-300">
                state[{i}]: {JSON.stringify(val)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}