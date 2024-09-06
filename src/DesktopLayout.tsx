import { ParentComponent } from "solid-js";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { GameProvider } from "./GameProvider";

const DesktopLayout: ParentComponent = (props) => {
  return (
    <GameProvider>
      <div class="deskop-layout h-screen w-screen flex flex-col">
        <Header />
        <div class="id-1 flex grow shrink min-h-0 [&>*]:grow [&>*]:shrink">
          {props.children}
        </div>
        <SideBar />
      </div>
    </GameProvider>
  );
};

export default DesktopLayout;
