import { ReactNode, FC, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardProcessProps {
  icon: string;
  children: ReactNode;
  title: string;
}

const CardProcess: FC<CardProcessProps> = ({
  icon,
  children,
  title,
}: CardProcessProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="card-process" data-aos="fade-down">
      <div className="bg"></div>
      <div className="blob"></div>
      <div className="bg-blob"></div>
      <div className="p-6 flex flex-col justify-center gap-4 absolute z-10">
        <div className="flex justify-center ">
          <img src={icon} alt="icon" className="size-14" />
        </div>
        <h3 className="text-black text-center font-extrabold text-2xl">
          {title}
        </h3>
        <p className="text-black font-medium text-sm">{children}</p>
      </div>
    </div>
  );
};

export default CardProcess;
