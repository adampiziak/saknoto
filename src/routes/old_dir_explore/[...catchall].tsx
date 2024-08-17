import { A, useNavigate } from "@solidjs/router";
import { onMount } from "solid-js";

export default function ExplorePage() {
  const navigate = useNavigate();
  onMount(() => {
    navigate("/explore/list");
  });
}
