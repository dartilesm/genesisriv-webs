<script>
  let scrollPosition = 0;
  let translateY = 0;

  window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY;
    translateY = scrollPosition * -0.05;
  });

  const bodyHeight = document.body.clientHeight;
</script>

<div
  class="absolute inset-0 -z-20 h-full w-full bg-white dark:bg-gray-900 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#353535_1px,transparent_1px)] [background-size:16px_16px] top-0"
>
  <div
    class="relative h-full w-full bg-gradient-to-b from-transparent to-violet-100 dark:from-transparent dark:to-purple-900"
  ></div>
</div>

<div class="absolute h-[50em] w-[50em] bg-purple-500 rounded-full -top-64 -left-64 opacity-5"></div>
<div
  class="absolute h-[25em] w-[25em] bg-purple-500 rounded-full -bottom-64 -right-64 opacity-10"
></div>
<div class="fixed w-screen -z-30 top-0 h-screen" data-fixed-background>
  <div class="relative h-full w-full overflow-hidden"></div>
  <!-- Floating and moving violet circles -->
  <div class="fixed h-full w-full -z-10">
    <div
      class="absolute h-10 w-10 left-5 bg-purple-500 rounded-full opacity-10"
      style="transform: translateY({translateY}px)"
    ></div>
    <div
      class="absolute h-20 w-20 left-20 bottom-10 bg-purple-500 rounded-full opacity-10"
      style="transform: translateY({translateY}px)"
    ></div>
    <div
      class="absolute h-28 w-28 right-24 -bottom-12 bg-purple-500 rounded-full opacity-5"
      style="transform: translateY({translateY * 1.5}px)"
    ></div>
  </div>
</div>
