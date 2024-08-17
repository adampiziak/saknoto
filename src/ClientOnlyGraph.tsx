import ForceGraph3D from "3d-force-graph";
import { useNavigate } from "@solidjs/router";
import { createEffect, createSignal, onMount } from "solid-js";
import { useSaknotoContext } from "./Context";

export default function ClientOnlyGraph(props) {
  let graphRef;
  const context = useSaknotoContext();
  const [darkMode, setDarkMode] = createSignal(null);
  const mygraph = ForceGraph3D();

  onMount(() => {
    const root = document.querySelector("html");
    const scheme = root?.style.colorScheme ?? "light";
    setDarkMode(scheme);
    mygraph(graphRef);
  });

  createEffect(() => {
    const [width, height] = props.size;

    if (width === 0 || height === 0) {
      return;
    }

    mygraph.width(width);
    mygraph.height(height);
  });

  createEffect(() => {
    console.log("NEW DATYA");
    const data = props.data;
    mygraph.graphData(data);
  });

  createEffect(() => {
    if (!darkMode()) {
      return;
    }

    const data = props.data;
    if (data) {
      if (graphRef) {
        mygraph.linkOpacity(0.5);
        mygraph.onNodeClick((n, e) => {
          // navigate(`/board/${n.id}`);
          context.ui.sidebar.set({ active: true, view: "board", data: n.id });
        });
        mygraph.nodeResolution(32);

        if (darkMode() === "light") {
          mygraph.backgroundColor("#EEEEEE");
        } else {
          mygraph.backgroundColor("#141415");
        }
      }
    }
  });

  onMount(() => {
    setTimeout(() => {
      mygraph.graphData().nodes.forEach((n) => {
        n.fx = n.x;
        n.fy = n.y;
        n.fz = n.z;
      });
    }, 2000);
    mygraph.enableNodeDrag(false);
  });

  return (
    <div class="grow" ref={graphRef}>
      hola
    </div>
  );
}
