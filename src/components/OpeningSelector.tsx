import { createVirtualizer, Virtualizer } from "@tanstack/solid-virtual";
import Fuse from "fuse.js";
import { FaSolidPencil } from "solid-icons/fa";
import {
  Component,
  createEffect,
  createSignal,
  For,
  on,
  onCleanup,
  onMount,
  Show,
} from "solid-js";

const OpeningSelector: Component<{ onSelect?: any }> = (props) => {
  const [all, setAll] = createSignal<any[]>([]);
  const [open, setOpen] = createSignal(false);
  const [query, setQuery] = createSignal("-");
  const [selected, setSelected] = createSignal<any>({
    name: "none",
    label: "select opening",
  });
  const [filteredList, setFiltered] = createSignal<any[]>([]);
  const [listElement, setListElement] = createSignal<Element | undefined>();
  const [inputRef, setInputRef] = createSignal<Element | undefined>();
  const [virtualizer, setVirtualizer] =
    createSignal<Virtualizer<Element, Element>>();

  const selectOpening = (item: any) => {
    setSelected(item);
    setOpen(false);
    if (props.onSelect) {
      props.onSelect(item);
    }
  };

  const filterQuery = () => {
    const queryText = query();
    let filtered = [];
    if (queryText.length > 0) {
      const split = query()
        .split(" ")
        .map((n) => n.toLowerCase());
      filtered = all().filter((item) => {
        for (const it of split) {
          if (!item.label.toLowerCase().includes(it)) {
            return false;
          }
        }

        return true;
      });
    } else {
      filtered = all();
    }
    console.log(filtered.at(0));
    filtered.sort((a, b) => a.moves - b.moves);

    setFiltered([...filtered]);
  };

  const handleClick = (event: MouseEvent) => {
    const r = listElement();
    if (r) {
      if (
        !r.contains(event.target as Node) &&
        !inputRef()?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
  };

  createEffect(
    on(query, () => {
      filterQuery();
    }),
  );

  createEffect(() => {
    if (listElement() !== undefined) {
      const rowVirtualizer = createVirtualizer({
        count: filteredList().length,
        getScrollElement: () => listElement() ?? null,
        estimateSize: () => 35,
        overscan: 5,
      });
      console.log(rowVirtualizer);
      setVirtualizer(rowVirtualizer);
    }
  });

  onCleanup(() => {
    if (typeof document !== "undefined") {
      document.removeEventListener("mousedown", handleClick);
    }
  });
  onMount(async () => {
    const names_res = await fetch("/openings.json");
    const names_json = await names_res.json();
    const all_names = names_json.openings.map((n: any) => ({
      value: n.name,
      label: n.name,
      ...n,
      moves: (n.pgn.split(" ").length - 1) / 2,
    }));
    setQuery("");

    setAll(all_names);
    if (typeof document !== "undefined") {
      document.addEventListener("mousedown", handleClick);
    }
  });
  return (
    <div>
      <div>opening: </div>
      <Show when={!open()}>
        <div class="flex bg-lum-300 border border-lum-400 p-2 rounded-lg items-center justify-center">
          <div class="flex flex-col grow">
            <div class="grow">{selected().label}</div>
            <div class="grow">{selected().pgn}</div>
          </div>
          <FaSolidPencil
            class="hover:cursor-pointer"
            onclick={() => setOpen(true)}
          />
        </div>
      </Show>
      <Show when={open()}>
        <input
          type="text"
          class="w-full p-1 rounded focus"
          ref={(r) => {
            setInputRef(r);
            setTimeout(() => r.focus(), 10);
          }}
          value={query()}
          onInput={(e) => setQuery(e.target.value)}
          onFocus={() => {
            setOpen(true);
            filterQuery();
          }}
          onBlur={() => {
            // setOpen(false);
            // setQuery("");
          }}
        ></input>
        <div
          ref={setListElement}
          class="bg-pink-300"
          style={{
            height: `400px`,
            overflow: "auto", // Make it scroll!
          }}
        >
          <Show when={virtualizer() !== undefined}>
            <div
              class="bg-green-200"
              style={{
                height: `${virtualizer()?.getTotalSize()}px`,
                width: "100%",
                position: "relative",
              }}
            >
              <For each={virtualizer()?.getVirtualItems()}>
                {(vrow) => {
                  const item = filteredList()[vrow.index];
                  let ref!: HTMLDivElement;
                  onMount(() => virtualizer()?.measureElement(ref));
                  if (item) {
                    return (
                      <div
                        ref={ref}
                        data-index={vrow.index}
                        onclick={() => selectOpening(item)}
                        class="bg-lum-200 hover:bg-lum-300 py-1 hover:cursor-pointer"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: `auto`,
                          transform: `translateY(${vrow.start}px)`,
                        }}
                      >
                        <div>{item.label}</div>
                        <div>{item.moves}</div>
                      </div>
                    );
                  }
                }}
              </For>
            </div>
          </Show>
        </div>
      </Show>
    </div>
  );
};

export default OpeningSelector;
