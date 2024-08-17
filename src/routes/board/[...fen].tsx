import { useNavigate, useParams } from "@solidjs/router";
import { Chess } from "chess.js";
import { onMount } from "solid-js";

export default function BoardCatchAll() {
  const params = useParams();
  const navigate = useNavigate();

  const fen_param = decodeURIComponent(params.fen);

  try {
    const game = new Chess();
    game.load(fen_param);
    const url = "/board/" + encodeURIComponent(fen_param);
    console.log(`navigating to ${url}`);
    console.log(game.fen());
    navigate(url, { replace: true, resolve: false });
  } catch {
    console.error("ERROR");
  }

  return <div>{params.fen}</div>;
}
