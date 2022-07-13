import { Component, For } from "solid-js";
import { counter, setCounter } from "./store";

import { Excerpt } from "./components/Excerpt";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const App: Component = () => {
  return (
    <>
      <div class="flex flex-col bg-slate-600 h-screen overflow-scroll">
        <Header />
        <main class="flex content-center justify-center h-screen w-screen">
          <main>
            <ul role="list" class="my-7 space-y-5">
              <For each={[1, 2, 3, 4, 5, 6, 7, 8]}>
                {(i) => (
                  <li class="flex space-x-3">
                    <Excerpt
                      title={`Hello World ${i}`}
                      date={new Date().toISOString()}
                      excerpt={`This is a simple blog built with Solid.js. ${i}`}
                    />
                  </li>
                )}
              </For>
            </ul>
          </main>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
