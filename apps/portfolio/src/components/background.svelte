<script>
  let scrollPosition = 0;
  let translateY = 0;
  let bodyHeight = 0;
  let clientHeight = 0;

  function handleScrollChange() {
    scrollPosition = window.scrollY;
    translateY = scrollPosition * -0.05;
  }
</script>

<svelte:window on:scroll={handleScrollChange} bind:innerHeight={clientHeight} />
<svelte:body bind:clientHeight={bodyHeight} />

<div class="fixed w-screen -z-10 top-0" style="height: {bodyHeight}px">
  <div class="relative w-screen h-[100dvh] overflow-hidden" style="height: {clientHeight}px">
    <div
      class="absolute inset-0 -z-20 h-[100dvh] w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] top-0"
    >
      <div class="relative h-[100dvh] w-full bg-gradient-to-b from-transparent to-violet-100"></div>
    </div>

    <div
      class="absolute h-[50em] w-[50em] bg-purple-500 rounded-full -top-64 -left-64 opacity-5 will-change-transform"
      style="transform: translateY(-{scrollPosition}px)"
    ></div>
    <div
      class="absolute h-[25em] w-[25em] bg-purple-500 rounded-full -bottom-64 -right-64 opacity-10 will-change-transform"
      style="transform: translateY(-{scrollPosition}px)"
    ></div>
  </div>
  <!-- Floating and moving violet circles -->
  <div class="fixed h-full w-full -z-10">
    <div
      class="absolute h-10 w-10 left-5 bg-purple-500 rounded-full opacity-10 will-change-transform"
      style="transform: translateY({translateY}px)"
    ></div>
    <div
      class="absolute h-20 w-20 left-20 bottom-10 bg-purple-500 rounded-full opacity-10 will-change-transform"
      style="transform: translateY({translateY}px)"
    ></div>
    <div
      class="absolute h-28 w-28 right-24 -bottom-12 bg-purple-500 rounded-full opacity-5 will-change-transform"
      style="transform: translateY({translateY * 1.5}px)"
    ></div>
  </div>
</div>
