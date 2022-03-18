import React, { Suspense } from "react";
import { Sidebar } from "./Components/Sidebar";
import {Fallback} from 'Components'
const main = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-full flex flex-row bg-white scroll-smooth ">
      <Sidebar />
      <main className="lg:w-3/4 md:w-1/5 sm:w-1/5">
        <Suspense fallback={<Fallback />}>{children}</Suspense>
      </main>
    </div>
  );
};

export default main;
