import { createVirtualizer, VirtualItem } from "@tanstack/solid-virtual";
import {
  Component,
  createEffect,
  createSignal,
  For,
  on,
  onMount,
  Show,
} from "solid-js";
import { sleep } from "~/utils";

const SaknotoSelect: Component<{ options: any[] }> = (props) => {
  let parentRef!: HTMLDivElement;
  const options = props.options;
  let virtualizer = createVirtualizer({
    count: options.length,
    getScrollElement: () => parentRef,
    estimateSize: () => 45,
  });

  const [choose, setChoose] = createSignal(false);
  const [selectedItem, setSelectedItem] = createSignal(null);

  const [items, setItems] = createSignal<VirtualItem[]>([]);
  createEffect(
    on(choose, () => {
      virtualizer = createVirtualizer({
        count: options.length,
        getScrollElement: () => parentRef,
        estimateSize: () => 45,
      });
      const items = virtualizer.getVirtualItems();
      setItems(items);
    }),
  );

  const selectHandler = (item: any) => {
    console.log(item);
    setSelectedItem(item);
    setChoose(false);
  };

  return (
    <>
      <Show when={!choose()}>
        <div
          onclick={() => setChoose(true)}
          class="text-wrap m-2 bg-lum-200 p-2"
        >
          {selectedItem()?.label ?? "choose opening"}
        </div>
      </Show>
      <Show when={choose()}>
        <div
          ref={parentRef}
          class="bg-red-200 m-2 rounded"
          style={{
            height: "400px",
            overflow: "auto",
          }}
        >
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${items().at(0)?.start ?? 0}px)`,
              }}
            >
              <For each={items()}>
                {(virtualRow) => {
                  let ref!: HTMLDivElement;
                  onMount(() => virtualizer.measureElement(ref));

                  return (
                    <div
                      ref={ref}
                      onclick={() =>
                        selectHandler(options.at(virtualRow.index))
                      }
                      class="bg-lum-200 hover:bg-lum-300"
                      data-index={virtualRow.index}
                    >
                      <div style={{ padding: "10px 0" }}>
                        <div>{options.at(virtualRow.index).label}</div>
                      </div>
                    </div>
                  );
                }}
              </For>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
};

export default SaknotoSelect;
