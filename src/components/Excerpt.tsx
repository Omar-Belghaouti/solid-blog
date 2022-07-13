import { formatDistanceToNow, parseISO } from "date-fns";

import { Component } from "solid-js";

interface ExcerptProps {
  title: string;
  date: string;
  excerpt: string;
}

export const Excerpt: Component<ExcerptProps> = ({ title, date, excerpt }) => {
  return (
    <a
      href="#"
      class="my-2 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {formatDistanceToNow(parseISO(date), { addSuffix: true })}
      </p>
      <p class="text-gray-700 dark:text-gray-200">{excerpt}</p>
    </a>
  );
};
