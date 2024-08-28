import { createEffect, createSignal } from "solid-js";
import { onMount, ParentComponent } from "solid-js";
import { Portal } from "solid-js/web";
import { debounce } from "~/utils";

const BottomSheet: ParentComponent<{ initialY: number }> = (props) => {
  let sheet_element: HTMLDivElement | undefined;
  let [offsetY, setOffsetY] = createSignal(0);
  let [positionY, setPositionY] = createSignal(10000);
  let [boardBottom, setBoardBottom] = createSignal(500);

  onMount(() => {
    if (sheet_element) {
      console.log(sheet_element.getBoundingClientRect());
    }
    setTimeout(() => {
      setBoardBottom((prev) => prev + 0.1);
    }, 50);
  });

  createEffect(() => {
    setBoardBottom(props.initialY);
  });

  let touchoffset = null;

  const fromTouchStart = (e: TouchEvent) => {
    touchoffset =
      e.touches.item(0)?.clientY - sheet_element?.getBoundingClientRect().top;
  };
  const fromMouseMove = (e: any) => {
    if (e.buttons === 1) {
      setOffsetY((prev) => prev + e.movementY);
    }
  };
  const fromTouchMove = (e: TouchEvent) => {
    if (touchoffset == null) {
      return;
    }
    const markers = [0, boardBottom()];
    const position = Math.min(
      Math.max(-5, e.touches.item(0)?.clientY - touchoffset),
      boardBottom() + 95,
    );
    setPositionY(position);
  };

  const fromTouchEnd = (e: TouchEvent) => {
    const position = positionY();
    const markers = [0, boardBottom()];
    let snap = null;
    for (const m of markers) {
      if (Math.abs(position - m) < 100) {
        snap = m;
        break;
      }
    }
    if (snap !== null) {
      animateSnap(snap);
    }
    touchoffset = null;
  };
  function easeInOutQuint(x: number): number {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
  }

  const easeOutSine = (x: number): number => {
    return Math.sin((x * Math.PI) / 2);
  };
  const snapTo = debounce((val: number | null) => {
    if (val !== null) {
      animateSnap(val);
    }
  }, 500);

  const animateSnap = (val: number) => {
    const from = positionY();
    const diff = from - val;

    for (let i = 0; i < 1; i += 0.01) {
      setTimeout(() => {
        setPositionY(from - easeInOutQuint(i) * diff);
      }, i * 400);
    }
  };

  createEffect(() => {
    const documentHeight = document.body.offsetHeight;
    const sheetHeight = sheet_element?.getBoundingClientRect().height;

    const minY = documentHeight - sheetHeight!;
    const markers = [0, boardBottom()];
    let newPosition = Math.min(
      boardBottom(),
      Math.max(boardBottom() + offsetY(), minY),
    );
    let snap = null;
    for (const m of markers) {
      if (Math.abs(newPosition - m) < 100) {
        snap = m;
        break;
      }
    }
    snapTo(snap);

    setPositionY(newPosition);
  });

  return (
    <Portal mount={document.body}>
      <div
        onMouseMove={fromMouseMove}
        onTouchMove={fromTouchMove}
        onTouchStart={fromTouchStart}
        onTouchEnd={fromTouchEnd}
        onmouseout={() => (touchoffset = null)}
        ref={sheet_element}
        class="text-lum-800 absolute shadow-lg mobile-view z-30  overflow-hidden bottom-0 left-0 w-screen h-screen bg-lum-100"
        style={{ top: `${positionY()}px` }}
      >
        <div class="sheet-handle h-8 active:bg-lum-200 w-full flex items-center justify-center">
          <div class="handle-marker w-36 h-1 bg-lum-300 rounded-full"></div>
        </div>
        <div>{props.children}</div>
      </div>
    </Portal>
  );
};

export default BottomSheet;
