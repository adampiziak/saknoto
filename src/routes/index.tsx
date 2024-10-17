import { useLocation } from "@solidjs/router";
import { Component, createSignal, onMount, Show } from "solid-js";
// import { useSakarboContext } from "~/Context";
import HomeDesktop from "~/components/HomeDesktop";
import HomeMobile from "~/components/HomeMobile";
import { useGame } from "~/GameProvider";
// import { Game } from "~/Game";

const PlayPage: Component = () => {
  const [pageWidth, setPageWidth] = createSignal(0);
  const location = useLocation();
  const game = useGame();
  onMount(() => {
    setPageWidth(document.body.offsetWidth);
    const fromPosition = location?.state?.fen;
    if (fromPosition) {
      setTimeout(() => {
        game()?.loadPosition(fromPosition);
        game()?.notifyEngine();
        window.history.replaceState({}, "some title");
      }, 1000);
    }
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
