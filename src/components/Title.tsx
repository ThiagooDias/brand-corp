import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className="md:flex gap-1 my-8 justify-center items-center">
      <hr className="hr-gradient-l flex-grow hidden md:block" />
      <h2 className="text-5xl font-bold text-center flex-shrink-0 mx-2">
        {children}
      </h2>
      <hr className="hr-gradient-r flex-grow hidden md:block" />
    </div>
  );
};

export default Title;
