import { Component, createSignal, Signal } from "solid-js";
import SelectDropdown from "./SelectDropdown";

export interface FilterOptions {
  color: "white" | "black" | "both";
  repertoire: "no filter" | "exclude repertoire" | "repertoire only";
  sortby: "games" | "winrate" | "elo delta";
  view: "list" | "graph";
}

const FilterOptionsComponent: Component<{ options: Signal<FilterOptions> }> = (
  props,
) => {
  const [options, setOptions] = props.options;

  const setColor = (color: "white" | "black" | "both") => {
    setOptions((prev) => ({ ...prev, color: color }));
  };

  const setRepertoireFilter = (opt) => {
    setOptions((prev) => ({ ...prev, repertoire: opt }));
  };

  return (
    <div class="px-8 py-2 w-fit flex gap-2 flex-col  mt-4">
      <SelectDropdown
        label="view"
        options={["list", "graph"]}
        value={options().view}
        on_update={(v) => setOptions((prev) => ({ ...prev, view: v }))}
      />
      <SelectDropdown
        label="color"
        options={["both", "white", "black"]}
        value={options().color}
        on_update={(val) => setColor(val)}
      />
      <SelectDropdown
        label="repertoire"
        options={["no filter", "exclude repertoire", "repertoire only"]}
        value={options().repertoire}
        on_update={(val) => setRepertoireFilter(val)}
      />
      <SelectDropdown
        label="sort by"
        options={["games", "winrate", "elo delta"]}
        value={options().sortby}
        on_update={(val) => setOptions((prev) => ({ ...prev, sortby: val }))}
      />
    </div>
  );
};

export default FilterOptionsComponent;
