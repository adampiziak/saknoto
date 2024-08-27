import { Select } from "@kobalte/core/select";
import { Component } from "solid-js";

export interface SelectDropdownProps {
  label: string | undefined;
  options: string[];
  value: string;
  on_update?: (arg0: string) => any;
}

const SelectDropdown: Component<SelectDropdownProps> = (props) => {
  const update_value = (val: any) => {
    if (val) {
      if (props.on_update) {
        props.on_update(val);
      }
    }
  };

  return (
    <div class="flex flex-col">
      <div class="pb-0.5 ml-1 opacity-60 text-sm font-medium">
        {props.label}
      </div>
      <Select
        options={props.options}
        value={props.value}
        onChange={(v) => update_value(v)}
        placeholder="selection option"
        itemComponent={(props) => (
          <Select.Item
            item={props.item}
            class=" text-lum-900 bg-lum-200 hover:cursor-pointer  px-2 py-1"
          >
            <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
          </Select.Item>
        )}
      >
        <Select.Trigger class="px-2 py-1 bg-lum-200 hoverable w-full rounded  text-left text-nowrap grow">
          <Select.Value>{(state) => state.selectedOption()}</Select.Value>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content class="z-50">
            <Select.Listbox class="bg-lum-200 border-lum-300 rounded shadow border" />
          </Select.Content>
        </Select.Portal>
      </Select>
    </div>
  );
};

export default SelectDropdown;
