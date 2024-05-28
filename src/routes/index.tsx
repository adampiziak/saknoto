import { onMount } from "solid-js";
import * as lichess from "lila-stockfish-web";

export default function Home() {
  onMount(async () => {
    console.log("hey");

    // const makeModule = await import("~/../public/sf161-70.js");
    // makeModule
    //   .default({})
    //   .then(() => console.log("ready!"))
    //   .catch((e) => console.error(e));
  });
  return <main></main>;
}
