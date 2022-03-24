import React, { Suspense, useState } from  "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Sidebar, NavModal } from "./Components/Sidebar";
import { Fallback } from "Components";
const Main = (props) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full h-full flex flex-row bg-slate-200 scroll-smooth relative">
        <Sidebar />
        <main className="w-full">
          <Suspense fallback={<Fallback />}>{children}</Suspense>
        </main>
        <button onClick={() => setIsOpen(true)} className="lg:hidden md:hidden sm:hidden w-10 h-10 text-white fixed top-[92%] left-[85%] z-10 flex justify-center items-center font-black bg-slate-800 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-slate-300 rounded-3xl text-sm p-2.5">
          <AiOutlinePlus />
        </button>
      </div>
      <NavModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default Main;
