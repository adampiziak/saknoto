import { Button } from "@kobalte/core/button";
import { Dialog } from "@kobalte/core/dialog";
import { TextField } from "@kobalte/core/text-field";
import { Toast, toaster } from "@kobalte/core/toast";
import { createSignal, onMount } from "solid-js";
import { Portal } from "solid-js/web";
import { debounce } from "~/utils";
import { useSaknotoContext } from "~/Context";

export default function SyncDialog() {
  return (
    <Dialog defaultOpen={false}>
      <Dialog.Trigger>user</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class="fixed inset-0 dark:bg-black/70 bg-black/40  z-50 " />
        <div class="fixed inset-0 bg-gray z-50 flex justify-center items-center outline-none">
          <Dialog.Content class="">
            <SyncComponent />
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog>
  );
}

const SyncComponent = (props: any) => {
  const sakarbo = useSaknotoContext();
  const [username, setUsername] = createSignal<string | null>(null);
  const [valid, setValid] = createSignal(true);

  onMount(() => {
    sakarbo.userManager.load();
    const user = sakarbo.userManager.username;
    setUsername(user);
    validate();
  });

  const updateUsername = (e: Event) => {
    setUsername(e.target.value);

    validate();
  };

  const validate = debounce(() => {
    fetch(
      `https://lichess.org/api/users/status?ids=${encodeURIComponent(username())}`,
    ).then((res) => {
      res.json().then((j) => {
        setValid(j.length > 0);
      });
    });
  }, 600);

  const storeUsername = () => {
    const un = username();
    if (un) {
      sakarbo.userManager.set(un);
      sakarbo.openingGraph.load(un);
    }
  };

  return (
    <div class="bg-main -mt-48 w-50 border border-stone-300 dark:border-stone-800 p-5 w-96 rounded flex flex-col gap-4">
      <div class="">{username()}</div>
      <div style={{ color: valid() ? "seagreen" : "indianred" }}>
        {valid() ? "✓ valid" : "✗ invalid username"}
      </div>
      <TextField class="flex flex-col">
        <TextField.Label class="opacity-90">lichess user</TextField.Label>
        <TextField.Input
          class="rounded"
          value={username()}
          onInput={updateUsername}
        />
      </TextField>
      <Button
        onClick={storeUsername}
        class="bg-blue-700/90 text-stone-100 font-medium hover:bg-blue-500 px-5 py-2  rounded self-end"
      >
        set username
      </Button>
    </div>
  );
};
