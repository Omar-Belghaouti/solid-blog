import { counter, setCounter } from "./store";

import type { Component } from "solid-js";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const App: Component = () => {
  return (
    <div class="flex flex-col h-screen bg-slate-600">
      <Header />
      <main class="flex content-center justify-center h-screen w-screen">
        <main>
          <h1 class="text-3xl text-white">Solid Blog</h1>
          <p class="text-xl text-white">
            This is a simple blog built with Solid.js.
          </p>
          <p class="text-xl text-white">The counter is: {counter()}</p>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCounter(counter() + 1)}
          >
            Add
          </button>
        </main>
      </main>
      <Footer />
    </div>
  );
};

export default App;
