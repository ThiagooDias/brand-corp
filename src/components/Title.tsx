
import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className="flex gap-1 mb-8 justify-center items-center">
      <hr className="hr-gradient-l flex-grow" />
      <h2 className="text-4xl font-bold text-center flex-shrink-0 mx-2">
        {children}
      </h2>
      <hr className="hr-gradient-r flex-grow" />
    </div>
  );
};

export default Title;
