import { Api } from "chessground/api";
import { createSignal, onMount } from "solid-js";
import { BoardView } from "~/BoardView";

export default function Home() {
  const [api, setApi] = createSignal<Api | null>(null);
  onMount(async () => {
    // const makeModule = await import("~/../public/sf161-70.js");
    // makeModule
    //   .default({})
    //   .then(() => console.log("ready!"))
    //   .catch((e) => console.error(e));
  });
  return (
    <main class="flex flex-grow mx-24 gap-4  justify-center">
      <div class="chessboard-container grow shrink flex p-8 max-h-screen">
        <div class="flex grow shrink rounded overflow-hidden relative ">
          <BoardView setApi={setApi} />
        </div>
      </div>
      <div class="tools-container flex-grow p-8 flex flex-col *:flex-grow gap-4 *:rounded *:bg-main-card *:p-2 max-w-[600px]">
        <div class="">engine</div>
        <div class="">rep</div>
        <div class="">explorer</div>
      </div>
    </main>
  );
}
