import { A } from "@solidjs/router";

export default function ExploreNav() {
  return (
    <div>
      <nav class="flex flex-col gap-2 ml-8 mt-8 mb-8 w-48">
        <A href="/explore/list" class="lvl-2 rounded border p-4 hoverable">
          list
        </A>
        <A href="/explore/graph" class="lvl-2 rounded border p-4 hoverable">
          graph
        </A>
        <A href="/explore/tree" class="lvl-2 rounded border p-4 hoverable">
          tree
        </A>
      </nav>
    </div>
  );
}
