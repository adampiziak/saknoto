import { createVirtualizer } from "@tanstack/solid-virtual";
import * as combobox from "@zag-js/combobox";
import { normalizeProps, useMachine } from "@zag-js/solid";
import Fuse from "fuse.js";
import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  createUniqueId,
  For,
  onMount,
  Show,
} from "solid-js";
import { Portal } from "solid-js/web";
function containsInOrder(a, b) {
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[j]) {
      j++;
    }
    if (j === b.length) {
      return true;
    }
  }
  return false;
}

const SaknotoCombobox: Component<{ options: any[] }> = (props) => {
  const [options, setOptions] = createSignal(props.options);
  let contentRef: HTMLElement | undefined;

  const collection = createMemo(() =>
    combobox.collection({
      items: options(),
      itemToValue: (item) => item.value,
      itemToString: (item) => item.label,
    }),
  );
  let fuse = new Fuse(props.options, {
    keys: ["label"],
  });
  let virtualizer = createVirtualizer({
    count: props.options.length,
    getScrollElement: () => contentRef,
    estimateSize: () => 32,
  });

  createEffect(() => {
    fuse = new Fuse(props.options, {
      keys: ["label"],
    });
  });
  createEffect(() => {
    virtualizer.setOptions({
      count: options().length,
      getScrollElement: () => contentRef,
      estimateSize: () => 32,
    });
  });

  onMount(() => {
    console.log(contentRef);
    virtualizer.setOptions({
      count: options().length,
      getScrollElement: () => contentRef,
      estimateSize: () => 32,
    });
  });

  const [state, send] = useMachine(
    combobox.machine({
      id: createUniqueId(),
      collection: collection(),
      onOpenChange() {
        setOptions(props.options);
      },
      onInputValueChange({ inputValue }) {
        const split = inputValue.split(" ").map((n) => n.toLowerCase());
        const filtered = props.options.filter((item) => {
          for (const it of split) {
            if (!item.label.toLowerCase().includes(it)) {
              return false;
            }
          }

          return true;
        });
        // const filtered2 = fuse.search(inputValue).map((n) => n.item);
        // const filtered2 = props.options.filter((item) =>
        //   containsInOrder(item.label.toLowerCase(), inputValue.toLowerCase()),
        // );
        // console.log();
        // console.log("------");
        // console.log(filtered);
        // console.log(filtered2);
        // console.log(filtered.length);
        console.log("set");
        console.log(filtered.length);
        setOptions(filtered);
      },
    }),
    {
      context: createMemo(() => ({
        collection: collection(),
      })),
    },
  );

  const api = createMemo(() => combobox.connect(state, send, normalizeProps));

  return (
    <div>
      <div {...api().getRootProps()}>
        <label {...api().getLabelProps()}>Select country</label>
        <div {...api().getControlProps()}>
          <input {...api().getInputProps()} />
          <button {...api().getTriggerProps()}>▼</button>
        </div>
      </div>
      <Portal>
        <div {...api().getPositionerProps()}>
          <div {...api().getContentProps()} ref={contentRef}>
            <div
              style={{
                height: `${virtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative",
              }}
            >
              <For each={virtualizer.getVirtualItems()}>
                {(row) => {
                  const item = props.options[row.index];
                  // console.log(virtualizer.getVirtualItems().length);
                  console.log(row.index);
                  if (item) {
                    return (
                      <div
                        class="bg-lum-200 text-lum-800 hover:bg-lum-300"
                        key={item.value}
                        {...api().getItemProps({ item })}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: `${item.size}px`,
                          transform: `translateY(${item.start}px)`,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.label}
                      </div>
                    );
                  }
                }}
              </For>
            </div>
          </div>
        </div>
      </Portal>
    </div>
  );
};

export default SaknotoCombobox;
