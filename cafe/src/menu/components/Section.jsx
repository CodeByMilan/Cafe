import React from "react";
import MenuItem from "./MenuItem";

const Section = ({ title, items }) => {
  return (
    <>
      <div className="space-y-4 mt-5 ">
        <h3 className="text-2xl font-bold font-mono text-black text-center mb-4 border-b pb-2">
          {title}
        </h3>
        <div className="flex flex-wrap -mx-2">
          {items.map((item, index) => (
            <div key={index} className="p-2 w-full sm:w-1/2 lg:w-1/3">
              <MenuItem title={item.title} description={item.description} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section;
