const StoryList = ({ title, month }) => {
  return (
    <li class="mb-10 ml-6">
      <span class="absolute flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-secondary"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </span>
      <h3 class="flex items-center mb-1 text-lg font-semibold text-pink-500">
        {title}
      </h3>
      <time class="block mb-2 text-sm font-normal leading-none text-white">
        {month}
      </time>
      <p class="mb-4 text-base font-normal text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempora
        accusamus repudiandae ab itaque! Dolore, aperiam aliquid! Officia,
        accusamus laborum.
      </p>
    </li>
  );
};

export default StoryList;
