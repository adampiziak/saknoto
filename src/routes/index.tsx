import { Component, createSignal, onMount, Show } from "solid-js";
// import { useSakarboContext } from "~/Context";
import HomeDesktop from "~/components/HomeDesktop";
import HomeMobile from "~/components/HomeMobile";
// import { Game } from "~/Game";

const PlayPage: Component = () => {
  const [pageWidth, setPageWidth] = createSignal(0);
  onMount(() => {
    setPageWidth(document.body.offsetWidth);
  });

  return (
    <>
      <Show when={pageWidth() < 1000} fallback={<HomeDesktop />}>
        <HomeMobile />
      </Show>
    </>
  );
};

export default PlayPage;
