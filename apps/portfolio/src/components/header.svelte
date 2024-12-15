<script lang="ts">
  import { cn } from "@/utils/cn";
  import type { Portfolio } from "@sanity-app/sanity.types";
  import sanitizeImage from "@sanity-app/utils/sanitize-image";

  export let data = {} as Portfolio["header"];

  let logoUrl: string = sanitizeImage(data?.logo, { format: "webp" }).url();
  let isMenuOpen = false;
  let hasScrolledBeyondHeaderHeight = false;
  let headerHegiht = 0;

  let isMobile = window.matchMedia("(max-width: 767px)").matches;

  function handleScroll() {
    if (isMobile && isMenuOpen) return;
    hasScrolledBeyondHeaderHeight = window.scrollY > headerHegiht;
  }

  function handleResize() {
    isMenuOpen = false;
    isMobile = window.matchMedia("(max-width: 767px)").matches;
  }

  function handleMenuToggle() {
    isMenuOpen = !isMenuOpen;
    if (isMobile) window.document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }
</script>

<svelte:window on:scroll={handleScroll} on:resize={handleResize} />
<header
  class={cn("px-4 md:px-6 mx-auto flex flex-col gap-12 z-30 sticky top-0", {
    "bg-white [box-shadow:_0_0px_0px_1px_rgba(0,0,0,0.1)]":
      hasScrolledBeyondHeaderHeight || isMenuOpen,
    "transition-colors duration-300": hasScrolledBeyondHeaderHeight,
  })}
  bind:clientHeight={headerHegiht}
>
  <nav class="bg-transparent py-4 container mx-auto">
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
          "flex flex-row gap-6": !isMobile,
          "fixed left-0 flex flex-col w-full bg-white z-20 p-4 gap-6 justify-between": isMobile,
        })}
        class:hidden={!isMenuOpen && isMobile}
        style:height={isMobile
          ? `calc(100dvh - ${isMenuOpen && isMobile ? headerHegiht : 0}px`
          : "auto"}
        style="top: {headerHegiht}px"
        id="navbar-default"
      >
        <ul
          class={cn({
            "font-medium flex flex-row gap-4 p-0 rounded-lg items-center": !isMobile,
            "text-right px-4 flex flex-col gap-6 font-semibold": isMobile,
          })}
        >
          {#each data?.links || [] as link}
            <li class="m-0">
              <a
                href={link.url}
                class={cn(
                  "block text-gray-900 rounded hover:bg-transparent border-0 hover:text-purple-700 p-0"
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
