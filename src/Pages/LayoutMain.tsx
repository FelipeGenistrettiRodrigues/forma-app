import { Outlet } from "react-router-dom";
import { Aside } from "../core-components/Aside/Aside";
import { MainHeader } from "../Components/MainHeader/MainHeader";

export function LayoutMain() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F3F3EE]">
      <Aside className="shrink-0" />

      <div className="flex flex-1 flex-col min-w-0 overflow-y-auto">
        <MainHeader />
        
        <main className="flex-1 px-10 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}