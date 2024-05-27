import { Button } from "@kobalte/core/button";

export default function Header() {
  return (
    <header class="px-4 py-2 border-b border-b-zinc-800 flex flex-wrap items-center">
      <div class="flex-grow basis-0">
        <div class="text-2xl font-normal font-['Lexend']">Ŝakarbo</div>
      </div>
      <div class="flex flex-grow justify-end">
        <Button class="hover:bg-zinc-700 p-2 px-4 rounded font-medium">
          sync
        </Button>
      </div>
    </header>
  );
}
