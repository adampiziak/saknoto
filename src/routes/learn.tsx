import { Component, createSignal } from "solid-js";
import "./learn.scss";
import BottomBarContent from "~/components/BottomBarContent";
import { StudySession } from "~/StudySession";
import { onMount } from "solid-js";
import { useSaknotoContext } from "~/Context";
import { useNavigate } from "@solidjs/router";

const Learn: Component = () => {
  const btnClass = "bg-lum-300 p-2 rounded text-lum-900 w-48 text-center";
  const nav = useNavigate();
  const goto = (dest: string) => {
    nav(dest);
  };
  let session: StudySession = new StudySession();
  const [todo, setTodo] = createSignal(0);
  const context = useSaknotoContext();
  onMount(async () => {
    if (!context.repertoire.ready()) {
      await context.repertoire.load();
    }
    session.load(context.repertoire);
    await session.refresh();
    if (session.getProgress()?.todo) {
      setTodo(session.getProgress()?.todo - 1);
    }
  });
  return (
    <div class="bg-lum-50 w-96 min-w-0 shrink flex justify-start items-center flex-col gap-2 pt-12">
      <div
        class={`${btnClass} ${todo() > 0 ? "bg-blue-500" : ""}`}
        onclick={() => goto("/study/flashcards")}
      >
        review{" "}
        {todo() > 0 ? `(${todo()} positions)` : "(no positions need review)"}
      </div>
      <div class={btnClass} onclick={() => goto("/build")}>
        build
      </div>
      <BottomBarContent mode="main"></BottomBarContent>
    </div>
  );
};

export default Learn;
