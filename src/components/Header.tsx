import SyncDialog from "./SyncDialog";
import ThemeSelector from "./ThemeSelector";

export default function Header() {
  return (
    <header class=" relative z-1 bg-inherit px-4 py-2 border-b dark:border-b-zinc-700 flex flex-wrap items-center">
      <div class="flex-grow basis-0">
        <div class="text-2xl font-normal font-['Lexend']">Ŝakarbo</div>
      </div>
      <div class="flex flex-grow justify-end gap-4">
        <ThemeSelector />
        <SyncDialog />
      </div>
    </header>
  );
}
