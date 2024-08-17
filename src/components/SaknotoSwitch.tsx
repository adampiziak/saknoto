import { PolymorphicProps } from "@kobalte/core/src/index.jsx";
import { SwitchRootProps } from "@kobalte/core/src/switch/switch-root.jsx";
import { Switch } from "@kobalte/core/switch";
import { Component, ParentProps } from "solid-js";

const SaknotoSwitch: Component<
  ParentProps<PolymorphicProps<"div", SwitchRootProps<"div">>>
> = (props) => {
  return (
    <Switch {...props} class="sak__switch">
      <Switch.Label>{props.children}</Switch.Label>
      <Switch.Input />
      <Switch.Control class="switch__control">
        <Switch.Thumb class="switch__thumb" />
      </Switch.Control>
    </Switch>
  );
};

export default SaknotoSwitch;
