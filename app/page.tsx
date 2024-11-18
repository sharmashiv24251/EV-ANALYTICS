import React from "react";

const Page = () => {
  return (
    <div className="lg:p-10 2xl:px-20 p-5 lg:h-screen">
      <div className="grid h-full grid-cols-2 grid-rows-7 gap-5 lg:grid-cols-4 lg:grid-rows-9">
        <div className="grid-item lg:row-span-2">1</div>
        <div className="grid-item lg:col-start-1 lg:row-span-2 lg:row-start-3">
          2
        </div>
        <div className="grid-item col-span-2 row-span-2 lg:col-span-3 lg:col-start-2 lg:row-span-4 lg:row-start-1">
          3
        </div>
        <div className="grid-item col-span-2 row-span-2 row-start-4 lg:col-span-2 lg:row-span-5 lg:row-start-5">
          4
        </div>
        <div className="grid-item col-span-2 row-span-2 row-start-6 h-96 lg:col-span-2 lg:col-start-3 lg:row-span-5 lg:row-start-5 lg:h-auto">
          5
        </div>
      </div>
    </div>
  );
};

export default Page;
