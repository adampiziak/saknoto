import { Button } from "@kobalte/core/button";
import { Dialog } from "@kobalte/core/dialog";
import { TextField } from "@kobalte/core/text-field";

export default function Header() {
  return (
    <header class=" relative z-1 bg-inherit px-4 py-2 border-b border-b-zinc-800 flex flex-wrap items-center">
      <div class="flex-grow basis-0">
        <div class="text-2xl font-normal font-['Lexend']">Ŝakarbo</div>
      </div>
      <div class="flex flex-grow justify-end">
        <Dialog defaultOpen={true}>
          <Dialog.Trigger>sync</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay class="fixed inset-0 bg-black opacity-20 z-50" />
            <div class="fixed inset-0 bg-gray z-50 flex justify-center items-center outline-none">
              <Dialog.Content class="">
                <div class="w-50 border border-zinc-700 p-5  w-96 rounded flex flex-col gap-4">
                  <TextField class="flex flex-col">
                    <TextField.Label class="opacity-90">
                      lichess user
                    </TextField.Label>
                    <TextField.Input class="rounded" />
                  </TextField>
                  <Button class="bg-blue-700  font-medium hover:bg-blue-500 px-5 py-2  rounded self-start">
                    sync
                  </Button>
                </div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        </Dialog>
      </div>
    </header>
  );
}
