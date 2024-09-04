import { Button } from "@kobalte/core/button";
import { TextField } from "@kobalte/core/text-field";
import { Component, createSignal, For, onMount, Show } from "solid-js";
import { useSaknotoContext } from "~/Context";
import User from "~/data/User";
import { debounce, debounce_async } from "~/utils";

const UserView: Component = () => {
  const context = useSaknotoContext();
  const [user, setUser] = createSignal<User | null>(null);

  const [inputted_username, set_inputted_username] = createSignal("");
  const [valid, setValid] = createSignal("");

  const set_input_username = (name: string) => {
    set_inputted_username(name);
    autocomplete_username(name);
  };

  const [autocomplete, setAutocomplete] = createSignal([]);

  onMount(() => {
    const u = new User();
    setUser(u);
  });

  const autocomplete_username = debounce_async(async (name: string) => {
    if (name.length < 3) {
      return;
    }

    const res = await fetch(
      `https://lichess.org/api/player/autocomplete?term=${name}&object=true`,
    );
    const names = await res.json();
    setAutocomplete(names.result);

    for (const n of names.result) {
      if (name.toLowerCase() === n.name.toLowerCase()) {
        setValid(true);
        return;
      }
    }
    setValid(false);
  }, 300);

  const set_username = () => {
    const input_u = inputted_username();
    let found = null;
    for (const n of autocomplete()) {
      if (input_u.toLowerCase() === n.name.toLowerCase()) {
        found = n.name;
        break;
      }
    }

    if (!found) {
      console.log("NOT VALID USERNAME");

      return;
    }

    window.localStorage.setItem("username", found);
    window.location.reload();

    const u = new User();
    setUser(u);
  };

  return (
    <div class="p-2 w-60 w-full">
      <Show when={user()?.name === null}>
        <div class="flex flex-col gap-2">
          <TextField
            value={inputted_username()}
            onChange={set_input_username}
            class="flex flex-col"
          >
            <TextField.Label class="text-lum-800">username</TextField.Label>
            <TextField.Input class="bg-lum-200 text-lum-800 rounded" />
          </TextField>
          <div class="text-green-500 text-right">{valid() ? "valid" : ""}</div>
          <Button
            onClick={set_username}
            class="bg-lum-800 rounded font-medium text-lum-200 hover:bg-blue-400"
          >
            set username
          </Button>
        </div>
        <div class="mt-2">
          <For each={autocomplete()}>
            {(item, index) => (
              <div
                class="hoverable text-lum-800 opacity-70"
                onClick={() => set_input_username(item?.name)}
              >
                {item?.name}
              </div>
            )}
          </For>
        </div>
      </Show>
      <Show when={user()?.name !== null}>
        <div
          class="hoverable bg-lum-100 text-lum-800 border-lum-200 rounded p-2 border"
          onClick={() => setUser({ name: null })}
        >
          <div class="text-sm -mb-0.5 opacity-80">username</div>
          <div class="font-medium">{user()?.name}</div>
        </div>
      </Show>
    </div>
  );
};

export default UserView;
