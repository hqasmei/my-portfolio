import React from "react";

type ProjectType = {
  name: string;
  description: string;
};

const Project = (props: ProjectType) => {
  return (
    <div className="flex cursor-pointer flex-col rounded-lg bg-[#262626] px-4 py-2 duration-200 hover:scale-[1.02]">
      <div className="font-bold">{props.name}</div>
      <div className="text-sm text-neutral-400">{props.description}</div>
    </div>
  );
};

export default Project;
