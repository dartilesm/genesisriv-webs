<script lang="ts">
  import type { Portfolio } from "@/types";
  import { cn } from "@/utils/cn";
  import sanitizeImage from "@sanity-app/utils/sanitize-image";
  import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

  export let data = {} as Portfolio["header"];

  let logoUrl: string = sanitizeImage(data?.logo as SanityImageSource, { format: "webp" }).url();
  let isMenuOpen = false;
  let hasScrolledBeyondHeaderHeight = false;

  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  function handleScroll() {
    if (isMobile && isMenuOpen) return;
    hasScrolledBeyondHeaderHeight = window.scrollY > 60;
  }

  function handleMenuToggle() {
    isMenuOpen = !isMenuOpen;
    if (isMobile) window.document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }
</script>

<svelte:window on:scroll={handleScroll} />
<header
  class={cn(
    "px-4 md:px-6 mx-auto flex flex-col gap-12 z-20 sticky top-0 transition-colors duration-300",
    {
      "bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80":
        isMobile && isMenuOpen,
      "bg-white [box-shadow:_0_0px_0px_1px_rgba(0,0,0,0.1)]": hasScrolledBeyondHeaderHeight,
    }
  )}
>
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
        on:click={handleMenuToggle}
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
      <div
        class={cn({
          "w-full md:block md:w-auto": !isMobile,
          "fixed w-full left-0 top-16 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 h-screen z-20 py-4":
            isMobile,
        })}
        class:hidden={!isMenuOpen}
        id="navbar-default"
      >
        <ul
          class={cn({
            "font-medium flex flex-col md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0":
              !isMobile,
            "text-right md:text-left px-4 md:px-6 mx-auto flex flex-col gap-4 font-semibold":
              isMobile,
          })}
        >
          {#each data?.links || [] as link}
            <li>
              <a
                href={link.url}
                class={cn(
                  "block py-2 px-3 text-gray-900 rounded hover:bg-transparent border-0 hover:text-purple-700 p-0"
                )}
                aria-current="page"
                on:click={handleMenuToggle}
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
