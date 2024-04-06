<script lang="ts">
  import { Portfolio } from "@/types";
  import sanitizeImage from "@sanity-app/utils/sanitize-image";
  import { onMount } from "svelte";

  export let data = {} as Portfolio["header"];

  let logoUrl = "";

  onMount(() => {
    if (data?.logo) {
      const { url } = sanitizeImage(data.logo, { format: "webp" });
      logoUrl = url();
    }
    console.log({ logoUrl });
  });
</script>

<header class="container px-4 md:px-6 mx-auto flex flex-col gap-12">
  <nav class="bg-transparent py-4">
    <div class="max-w-5xl flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logoUrl} class="h-8" alt={data?.logo?.alt} />
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          {#each data?.links || [] as link}
            <li>
              <a
                href={link.url}
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>
</header>
