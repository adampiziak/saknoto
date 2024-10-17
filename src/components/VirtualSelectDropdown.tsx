import { Select } from "@kobalte/core/select";
import { createVirtualizer } from "@tanstack/solid-virtual";
import {
  createEffect,
  createMemo,
  createSignal,
  For,
  onMount,
  ParentComponent,
} from "solid-js";

export interface SelectDropdownProps {
  label?: string;
  options: string[];
  value: string;
  on_update?: (arg0: string) => any;
}

interface Item {
  value: string;
  label: string;
  disabled: false;
}

const VirtualSelectDropdown: ParentComponent<SelectDropdownProps> = (props) => {
  const update_value = (val: any) => {
    console.log(val);
    if (val) {
      if (props.on_update) {
        props.on_update(val);
      }
    }
  };

  return (
    <div class="flex flex-col">
      <div class="pb-0.5 ml-1 opacity-60 text-sm font-medium">
        {props.label ?? props.children}
      </div>
      <Select
        virtualized
        optionValue="value"
        optionTextValue="label"
        options={props.options}
        value={props.value}
        onChange={(v) => update_value(v)}
        placeholder="selection option"
      >
        <Select.Trigger class="px-2 py-1 bg-lum-200 hoverable w-full rounded  text-left text-wrap grow">
          <Select.Value>
            {(state: any) => state.selectedOption()?.value ?? ""}
          </Select.Value>
        </Select.Trigger>
        <Select.Portal>
          <SelectContent options={props.options} />
        </Select.Portal>
      </Select>
    </div>
  );
};

function SelectContent(props: { options: Item[] }) {
  let listboxRef: HTMLUListElement | undefined;
  const virtualizer = createVirtualizer({
    count: props.options.length,
    getScrollElement: () => listboxRef!,
    getItemKey: (index: number) => props.options[index].value,
    estimateSize: (i) => 32,
    overscan: 5,
  });
  console.log(props.options.length);

  return (
    <Select.Content class="bg-lum-800 text-lum-200">
      <Select.Listbox
        ref={listboxRef}
        scrollToItem={(key) =>
          virtualizer.scrollToIndex(
            props.options.findIndex((option) => option.value === key),
          )
        }
        style={{ height: "200px", width: "100%", overflow: "auto" }}
      >
        {(items) => (
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            <For each={virtualizer.getVirtualItems()}>
              {(virtualRow) => {
                const item = items().getItem(virtualRow.key);
                if (item) {
                  let r!: HTMLElement;
                  onMount(() => virtualizer.measureElement(r));

                  return (
                    <Select.Item
                      item={item}
                      ref={r}
                      data-index={virtualRow.index}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        transform: `translateY(${virtualRow.start ?? 0}px)`,
                      }}
                    >
                      <Select.ItemLabel>{item.rawValue.label}</Select.ItemLabel>
                    </Select.Item>
                  );
                }
              }}
            </For>
          </div>
        )}
      </Select.Listbox>
    </Select.Content>
  );
}

export default VirtualSelectDropdown;
