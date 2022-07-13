import { Component } from "solid-js";

export const Footer: Component = () => {
  return (
    <footer class="bg-gray-800 text-white text-center py-4">
      <h1 class="text-3md">Copyright {new Date().getFullYear()} &copy;</h1>
    </footer>
  );
};
